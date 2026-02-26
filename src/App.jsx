function App() {
  return (
    <BrowserRouter>
      <div className="min-w-[1280px] overflow-x-auto">
        <Navbar />
        <ScrollToTop />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services-details" element={<ServicesDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsCondition />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/security-approach" element={<SecurityApproach />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/project" element={<Project />} />
            <Route path="/tp1" element={<Page1 />} />
            <Route path="/tp2" element={<Page2 />} />
            <Route path="/tp3" element={<Page3 />} />
            <Route path="/tp4" element={<Page4 />} />
            <Route path="/tp5" element={<Page5 />} />
            <Route path="/tp6" element={<Page6 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
