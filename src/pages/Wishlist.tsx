import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const Wishlist = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleAddAllToCart = () => {
    items.forEach((item) => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      });
    });
    toast({
      title: "All items added!",
      description: `${items.length} items have been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Wishlist</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">My Wishlist</h1>
                <p className="text-muted-foreground">{items.length} {items.length === 1 ? 'item' : 'items'} saved</p>
              </div>
            </div>
            {items.length > 0 && (
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={clearWishlist}
                  className="gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </Button>
                <Button onClick={handleAddAllToCart} className="gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add All to Cart
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-12">
        <div className="container-custom">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Heart className="w-16 h-16 text-muted-foreground/50" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Start adding products you love! Click the heart icon on any product to save it here.
              </p>
              <Link to="/products">
                <Button size="lg" className="gap-2">
                  <Sparkles className="w-5 h-5" />
                  Explore Products
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Product Image */}
                  <Link to={`/product/${item.id}`} className="block">
                    <div className="relative aspect-square bg-gradient-to-br from-secondary to-muted p-6 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Decorative ring */}
                      <div className="absolute inset-4 border-2 border-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>

                  {/* Remove button */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                  </button>

                  {/* Product Info */}
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.category || 'Audio'}
                    </p>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(item)}
                        className="gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Continue Shopping */}
          {items.length > 0 && (
            <div className="mt-12 text-center">
              <Link to="/products">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wishlist;
