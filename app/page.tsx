"use client";
import About from "@/components/about/About";
import Article from "@/components/articles/Article";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MobileNav from "@/components/header/MobileNav";
import Project from "@/components/projects/Project";
import Service from "@/components/services/Service";
import Testimonial from "@/components/testimonials/Testimonial";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="">
        <header className="" id="home">
          <Header />
        </header>
        <main>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Service />
          </section>
          <section className="bg-[var(--theme-color)] py-[50px]" id="project">
            <Project />
          </section>

          <section id="testimonial">
            <Testimonial />
          </section>
          <section className="bg-[#F7F7F7] py-[50px]" id="articles">
            <Article />
          </section>
        </main>

        <footer
          className="bg-[var(--theme-color)] py-[50px] text-white"
          id="contact"
        >
          <Footer />
        </footer>
      </div>
    </div>
  );
}
