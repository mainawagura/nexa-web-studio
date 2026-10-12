import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  ShoppingBag, Search, X, Plus, Minus, Trash2, CheckCircle2, 
  ArrowRight, ShieldCheck, Star 
} from 'lucide-react';
import { luxeCartData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const LuxeCartBoutiqueDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [selectedCat, setSelectedCat] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([
    { id: "p1", name: "Artisanal Saddle Leather Tote", price: 180, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutSimulated, setCheckoutSimulated] = useState(false);

  const filteredProducts = luxeCartData.products.filter(p => {
    const matchesCat = selectedCat === "All Items" || p.category === selectedCat;
    const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const addToCart = (product: any) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans min-h-screen">
      
      {/* E-Commerce Header */}
      <header className="bg-slate-950 text-white sticky top-10 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-serif font-black text-2xl tracking-widest uppercase">LUXECART</span>
            <span className="text-[10px] tracking-widest text-amber-400 font-sans block -mt-1 uppercase">Boutique & Atelier</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
            {luxeCartData.categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`transition-colors ${selectedCat === cat ? 'text-amber-400 font-bold' : 'hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </button>

            <button
              onClick={openRequestModal}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
            >
              Request Store Site
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Curated Luxury Edit 2026</span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold">Refined Artisanal Lifestyle</h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Experience our sample boutique e-commerce platform with interactive product filtering, shopping bag, and checkout demo.
          </p>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search boutique products..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-xs bg-white outline-none focus:border-slate-800"
            />
          </div>
          <span className="text-xs text-slate-500">Showing {filteredProducts.length} items</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card flex flex-col justify-between group">
              <div>
                <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-white text-slate-800 shadow-sm">
                    {product.stock}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">{product.category}</span>
                    <span className="font-mono font-bold text-base text-slate-900">${product.price}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-slate-900 mt-1">{product.name}</h3>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Shopping Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h3 className="font-serif font-bold text-lg text-slate-900">Your Shopping Bag ({cart.length})</h3>
                <button onClick={() => setIsCartOpen(false)} className="p-1 text-slate-400 hover:text-slate-800">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {checkoutSimulated ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-lg text-slate-900">Demo Order Simulated!</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    This is an interactive concept demo. No actual payment credentials or cards are collected. In production, this connects to M-Pesa Daraja, Stripe, or PayPal.
                  </p>
                  <button
                    onClick={() => {
                      setCheckoutSimulated(false);
                      setCart([]);
                      setIsCartOpen(false);
                    }}
                    className="mt-4 px-4 py-2 bg-slate-950 text-white text-xs font-bold rounded-lg"
                  >
                    Clear & Continue
                  </button>
                </div>
              ) : cart.length > 0 ? (
                <div className="divide-y divide-slate-100 max-h-[60vh] overflow-y-auto mt-4">
                  {cart.map(item => (
                    <div key={item.id} className="py-4 flex gap-4 items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                        <p className="text-xs font-mono font-bold text-amber-700 mt-0.5">${item.price}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 rounded bg-slate-100 hover:bg-slate-200"><Minus className="w-3 h-3" /></button>
                          <span className="text-xs font-bold font-mono px-2">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 rounded bg-slate-100 hover:bg-slate-200"><Plus className="w-3 h-3" /></button>
                        </div>
                      </div>
                      <button onClick={() => updateQuantity(item.id, -item.quantity)} className="text-slate-400 hover:text-rose-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center text-xs text-slate-400">Your bag is empty.</div>
              )}
            </div>

            {!checkoutSimulated && cart.length > 0 && (
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex justify-between text-sm font-bold">
                  <span>Subtotal:</span>
                  <span className="font-mono">${subtotal}</span>
                </div>
                <button
                  onClick={() => setCheckoutSimulated(true)}
                  className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors"
                >
                  Simulate Demo Checkout (${subtotal})
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© LuxeCart Boutique & E-Commerce Atelier. Interactive Portfolio Concept.</p>
          <button onClick={openRequestModal} className="text-amber-400 font-bold hover:underline">
            Request E-Commerce Web Store →
          </button>
        </div>
      </footer>

    </div>
  );
};
