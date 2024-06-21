// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import ToyStore from './pages/ToyStore';
import Shop from './pages/Shop';
import Admin from './pages/Admin';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

function App() {
  return (
    <ShoppingCartProvider>
      <ThemeProvider> {/* Wrap everything with ThemeProvider */}
        <div className="d-flex flex-column min-vh-100">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow-1">
            <Container className="mb-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/toy-store" element={<ToyStore />} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ShoppingCartProvider>
  );
}

export default App;
