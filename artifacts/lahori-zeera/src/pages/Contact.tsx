import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const BOTTLE_IMG = `${import.meta.env.BASE_URL}lahori-zeera-hero.png`;
const OWNER_EMAIL = 'shantanitiwari12@gmail.com';
const OWNER_PHONE = '+91-9368042721';
const OWNER_PHONE_TEL = '+919368042721';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Mouse parallax for bottle
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 18 });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 80, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New order request from ${name || 'a Lahori Zeera fan'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    const mailto = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground font-sans overflow-hidden">
      {/* Ambient gradient + glow */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 w-[40rem] h-[40rem] rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(163,230,53,0.15),_transparent_60%)]" />
      </div>

      {/* Top nav */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <Link href="/">
          <button className="text-xl md:text-2xl font-black uppercase tracking-tight hover:text-primary transition-colors">
            Lahori Jeera
          </button>
        </Link>
        <Link href="/">
          <button className="text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            ← Back
          </button>
        </Link>
      </header>

      <main className="relative z-10 px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="pt-8 md:pt-12 mb-12 md:mb-16"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-6">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
            Baat <span className="text-primary">Karein.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-medium max-w-2xl">
            Bottle order karni hai? Bulk pe deal chahiye? Ya bas hello bolna hai? Hum sun rahe hain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: contact info + bottle */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="rounded-3xl p-8 bg-background/40 border border-primary/30 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Phone</p>
              <a
                href={`tel:${OWNER_PHONE_TEL}`}
                className="text-2xl md:text-3xl font-black tracking-tight hover:text-primary transition-colors block"
              >
                {OWNER_PHONE}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">Tap karke direct call karein.</p>
            </div>

            <div className="rounded-3xl p-8 bg-background/40 border border-primary/30 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Email</p>
              <a
                href={`mailto:${OWNER_EMAIL}`}
                className="text-xl md:text-2xl font-black tracking-tight break-all hover:text-primary transition-colors block"
              >
                {OWNER_EMAIL}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">Order, queries, partnerships — sab yahan.</p>
            </div>

            {/* Floating bottle preview */}
            <div className="relative hidden lg:flex items-center justify-center h-80 [perspective:1200px]">
              <motion.div
                className="relative w-56 [transform-style:preserve-3d]"
                style={{ rotateX: tiltX, rotateY: tiltY }}
              >
                <motion.div
                  animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
                  transition={{
                    y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="w-[140%] h-[140%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(163,230,53,0.5),_rgba(234,179,8,0.2)_45%,_transparent_70%)] blur-3xl" />
                  </div>
                  <img
                    src={BOTTLE_IMG}
                    alt="Lahori Zeera"
                    draggable={false}
                    className="w-full h-auto object-contain select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 md:p-10 bg-background/40 border border-primary/30 backdrop-blur-md flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Aapka naam"
                    className="h-12 rounded-xl bg-background/60 border-primary/30 focus-visible:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 ..."
                    className="h-12 rounded-xl bg-background/60 border-primary/30 focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="h-12 rounded-xl bg-background/60 border-primary/30 focus-visible:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Kitni bottles chahiye? Kahan deliver karni hai?"
                  className="rounded-xl bg-background/60 border-primary/30 focus-visible:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="rounded-full h-16 text-lg font-black uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-[0_0_40px_rgba(163,230,53,0.5)]"
              >
                Send Message
              </Button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-primary font-bold text-center"
                >
                  Aapka mail app khul gaya hai — bhejne ke liye Send dabaayein. Shukriya!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
