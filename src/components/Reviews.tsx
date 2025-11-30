import { useState, useEffect } from 'react';
import { Star, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';

interface Review {
    id: string;
    rating: number;
    comment: string;
    created_at: string;
    user_id: string;
    profiles?: {
        full_name: string;
    };
}

interface ReviewsProps {
    productId: string;
}

const Reviews = ({ productId }: ReviewsProps) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [newRating, setNewRating] = useState(5);
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        fetchReviews();
        checkUser();
    }, [productId]);

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);
    };

    const fetchReviews = async () => {
        try {
            const { data, error } = await supabase
                .from('reviews')
                .select('*, profiles(full_name)')
                .eq('product_id', productId)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setReviews(data || []);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) {
            toast.error('Please login to leave a review');
            return;
        }

        setSubmitting(true);
        try {
            const { error } = await supabase
                .from('reviews')
                .insert({
                    product_id: productId,
                    user_id: user.id,
                    rating: newRating,
                    comment: newComment
                });

            if (error) throw error;

            toast.success('Review submitted successfully!');
            setNewComment('');
            setNewRating(5);
            fetchReviews();
        } catch (error) {
            console.error('Error submitting review:', error);
            toast.error('Failed to submit review');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="mt-12">
            <h3 className="text-2xl font-bold text-forest-900 mb-6">Customer Reviews</h3>

            {/* Reviews List */}
            <div className="space-y-6 mb-10">
                {loading ? (
                    <p>Loading reviews...</p>
                ) : reviews.length === 0 ? (
                    <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm border border-mushroom-200">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                    <div className="bg-mushroom-100 p-1 rounded-full">
                                        <User className="w-4 h-4 text-mushroom-700" />
                                    </div>
                                    <span className="font-medium text-forest-900">
                                        {review.profiles?.full_name || 'Anonymous User'}
                                    </span>
                                </div>
                                <span className="text-sm text-gray-500">
                                    {new Date(review.created_at).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="flex text-yellow-400 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))
                )}
            </div>

            {/* Add Review Form */}
            <div className="bg-mushroom-50 p-6 rounded-xl border border-mushroom-200">
                <h4 className="text-lg font-semibold text-forest-900 mb-4">Write a Review</h4>
                {user ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setNewRating(star)}
                                        className="focus:outline-none transition-transform hover:scale-110"
                                    >
                                        <Star
                                            className={`w-6 h-6 ${star <= newRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                required
                                rows={3}
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500 p-2 border"
                                placeholder="Share your thoughts..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-forest-500 text-white px-4 py-2 rounded-md hover:bg-forest-600 transition-colors disabled:opacity-50"
                        >
                            {submitting ? 'Submitting...' : 'Post Review'}
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-4">
                        <p className="text-gray-600 mb-2">Please login to write a review.</p>
                        <a href="/login" className="text-forest-600 font-medium hover:underline">
                            Login here
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reviews;
