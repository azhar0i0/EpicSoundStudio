import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Star, Heart, ShoppingCart, Truck, Shield, Headphones, Volume2, Battery, Bluetooth, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headphoneImg from "@/assets/headphone.png";

const products = [
  { id: 1, name: "Unique Headphone", price: 199, rating: 5, color: "Olive Green", description: "Experience premium sound quality with our flagship wireless headphones. Featuring active noise cancellation, 40-hour battery life, and ultra-comfortable memory foam ear cushions." },
  { id: 2, name: "Colored Headphones", price: 149, rating: 4, color: "Rose Gold", description: "Stand out from the crowd with our stylish colored headphones. Perfect blend of fashion and function with deep bass and crystal-clear highs." },
  { id: 3, name: "Modern Headphone", price: 249, rating: 5, color: "Midnight Black", description: "The future of audio is here. Our modern headphones feature spatial audio, transparent mode, and seamless device switching." },
  { id: 4, name: "Classic Headphone", price: 129, rating: 4, color: "Vintage Brown", description: "Timeless design meets modern technology. Enjoy warm, balanced sound with our classic headphones." },
  { id: 5, name: "Sport Headphone", price: 179, rating: 5, color: "Electric Blue", description: "Built for athletes. Sweat-resistant, secure fit, and powerful bass to fuel your workouts." },
  { id: 6, name: "Studio Headphone", price: 299, rating: 5, color: "Platinum Silver", description: "Professional-grade audio for creators. Flat frequency response and exceptional detail for mixing and mastering." },
];

const reviews = [
  { id: 1, name: "Sarah Johnson", avatar: "S", rating: 5, date: "2 days ago", title: "Absolutely Amazing!", comment: "Best headphones I've ever owned. The sound quality is incredible and they're so comfortable I forget I'm wearing them.", verified: true },
  { id: 2, name: "Michael Chen", avatar: "M", rating: 5, date: "1 week ago", title: "Worth Every Penny", comment: "The noise cancellation is on another level. Perfect for my daily commute and work from home setup.", verified: true },
  { id: 3, name: "Emily Davis", avatar: "E", rating: 4, date: "2 weeks ago", title: "Great Sound, Minor Issues", comment: "Sound quality is fantastic. Only giving 4 stars because the app could use some improvements.", verified: true },
  { id: 4, name: "James Wilson", avatar: "J", rating: 5, date: "3 weeks ago", title: "Premium Quality", comment: "The build quality is exceptional. These feel like they'll last for years. Bass is punchy and mids are clear.", verified: false },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [currentReviewPage, setCurrentReviewPage] = useState(0);

  const product = products.find(p => p.id === Number(id)) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: headphoneImg
      });
    }
  };

  const specs = [
    { icon: Volume2, label: "Driver Size", value: "40mm" },
    { icon: Battery, label: "Battery Life", value: "40 Hours" },
    { icon: Bluetooth, label: "Bluetooth", value: "5.3" },
    { icon: Headphones, label: "Impedance", value: "32 Ohms" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/30 rounded-3xl p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />
              <img 
                src={headphoneImg} 
                alt={product.name}
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500"
              />
              
              {/* Floating badges */}
              <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                Best Seller
              </div>
              <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ⭐ {product.rating}.0 Rating
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-2">Epic-Sound Premium Collection</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} />
                  ))}
                </div>
                <span className="text-muted-foreground">(128 reviews)</span>
                <span className="text-primary font-medium">In Stock</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-foreground">${product.price}</span>
              <span className="text-xl text-muted-foreground line-through">${Math.round(product.price * 1.3)}</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">Save 30%</span>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div>
              <p className="font-medium mb-3">Color: <span className="text-primary">{product.color}</span></p>
              <div className="flex gap-3">
                {["bg-primary", "bg-rose-400", "bg-slate-800", "bg-amber-700", "bg-blue-500"].map((color, i) => (
                  <button 
                    key={i}
                    className={`w-10 h-10 rounded-full ${color} ring-2 ring-offset-2 ring-offset-background ${i === 0 ? 'ring-primary' : 'ring-transparent'} hover:ring-primary transition-all`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-full">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-xl hover:bg-muted transition-colors rounded-l-full"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-xl hover:bg-muted transition-colors rounded-r-full"
                >
                  +
                </button>
              </div>
              <Button onClick={handleAddToCart} size="lg" className="flex-1 h-12 text-lg gap-2 rounded-full">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${isWishlisted ? 'bg-red-500 border-red-500 text-white' : 'border-border hover:border-primary'}`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">Orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">2 Year Warranty</p>
                  <p className="text-xs text-muted-foreground">Full coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">24/7 Support</p>
                  <p className="text-xs text-muted-foreground">Expert help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex border-b border-border mb-8 gap-8">
          {["description", "specifications", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 font-medium capitalize transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {product.description} Experience the next level of audio immersion with our cutting-edge technology. 
              Featuring premium 40mm drivers, advanced active noise cancellation, and a comfortable over-ear design, 
              these headphones are perfect for music lovers, gamers, and professionals alike.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The ergonomic design ensures hours of comfortable listening, while the premium materials guarantee durability. 
              With intuitive touch controls and seamless Bluetooth 5.3 connectivity, managing your audio has never been easier.
            </p>
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <spec.icon className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground text-sm">{spec.label}</p>
                <p className="text-2xl font-bold">{spec.value}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-8">
            {/* Reviews Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Customer Reviews</h3>
                <p className="text-muted-foreground">Based on 128 reviews</p>
              </div>
              <Button variant="outline" className="rounded-full">Write a Review</Button>
            </div>

            {/* Review Cards - Unique Stacked Style */}
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <div 
                  key={review.id}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background layers for depth effect */}
                  <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform" />
                  <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform" />
                  
                  {/* Main card */}
                  <div className="relative bg-card rounded-3xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    {/* Quote icon */}
                    <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-serif">
                      "
                    </div>
                    
                    <div className="flex items-start gap-4 mb-4 pt-2">
                      {/* Unique avatar with gradient border */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-spin-slow opacity-50" style={{ padding: '2px' }} />
                        <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg ring-2 ring-background">
                          {review.avatar}
                        </div>
                        {review.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold">{review.name}</h4>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <h5 className="font-semibold text-lg mb-2">{review.title}</h5>
                    <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                    
                    {/* Helpful buttons */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                      <button className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        <span>👍</span> Helpful (12)
                      </button>
                      <button className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        <span>💬</span> Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              {[1, 2, 3].map((page) => (
                <Button 
                  key={page}
                  variant={page === 1 ? "default" : "outline"} 
                  size="icon" 
                  className="rounded-full"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Related Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold">Related Products</h2>
          <Link to="/products">
            <Button variant="outline" className="rounded-full">View All</Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {relatedProducts.map((item) => (
            <Link 
              key={item.id} 
              to={`/product/${item.id}`}
              className="group bg-card rounded-3xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary/20 rounded-2xl p-8 mb-4 overflow-hidden">
                <img 
                  src={headphoneImg} 
                  alt={item.name}
                  className="w-full max-w-[200px] mx-auto drop-shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                />
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} />
                ))}
              </div>
              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
              <p className="text-primary font-bold text-xl">${item.price}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
