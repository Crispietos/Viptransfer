"use client";
import { articles, categories, tags } from "@/data/articles"; // Usunąłem recentPosts, zrobimy to lepiej
import Link from "next/link";
import Image from "next/image";

export default function Blogs2() {
  // AUTOMATYZACJA: Weź 3 najnowsze artykuły z głównej listy (skoro i tak są posortowane w index.js)
  const dynamicRecentPosts = articles.slice(0, 3);

  return (
    <section className="section pt-60 bg-white latest-new-white">
      <div className="container-sub">
        <div className="row">
          
          {/* LEWA KOLUMNA - LISTA ARTYKUŁÓW */}
          <div className="col-lg-8">
            <div className="row cardNewsBig">
              {articles.map((elm, i) => (
                <div key={i} className="col-lg-12">
                  <div className="cardNews wow fadeInUp" style={{ marginBottom: "40px" }}>
                    
                    <Link href={`/blog/${elm.slug}`}>
                      <div className="cardImage" style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
                        {/* Data - Zakładam, że CSS pozycjonuje to na zdjęciu, więc color-white jest OK */}
                        <div className="datePost">
                          <div className="heading-52-medium color-white">
                            {elm.date}.
                          </div>
                          <p className="text-14 color-white">{elm.monthYear}</p>
                        </div>
                        
                        {/* Obrazek - dodane object-fit żeby każdy był równy */}
                        <Image
                          width={850}
                          height={500}
                          style={{ 
                            width: "100%", 
                            height: "400px", // Ustawiamy stałą wysokość dla elegancji
                            objectFit: "cover" 
                          }}
                          src={elm.imageSrc}
                          alt={elm.title}
                        />
                      </div>
                    </Link>

                    <div className="cardInfo" style={{ padding: "25px 0" }}>
                      {/* Tagi - poprawka na tablicę */}
                      <div className="tags mb-10">
                        <span className="text-14 color-text" style={{ opacity: 0.6, textTransform: "uppercase", letterSpacing: "1px" }}>
                           {elm.tags ? elm.tags[0] : "Travel"}
                        </span>
                      </div>

                      <Link href={`/blog/${elm.slug}`}>
                        {/* WAŻNE: Zmiana color-white na color-text-main (ciemny), bo tło jest białe! */}
                        <h3 className="heading-32-medium color-text mb-20">
                          {elm.title}
                        </h3>
                      </Link>
                      
                      {/* Krótki opis (opcjonalnie, jeśli jest w danych) */}
                      <p className="text-16 color-text mb-20" style={{ opacity: 0.8 }}>
                        {elm.shortDescription}
                      </p>

                      <Link
                        className="cardLink btn btn-arrow-up"
                        href={`/blog/${elm.slug}`}
                      >
                        <svg
                          className="icon-16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PRAWA KOLUMNA - SIDEBAR */}
          <div className="col-lg-4 wow fadeInUp">
            
            {/* Wyszukiwarka */}
            <div className="box-form-search mb-40">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search..."
                  style={{ borderRadius: "8px" }}
                />
                <button className="btn btn-search-2" type="submit">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                  </svg>
                </button>
              </form>
            </div>

            {/* Kategorie / Services */}
            <div className="sidebar-radius mb-40">
              <h5 className="text-20-medium sidebar-title mb-20">Categories</h5>
              <div className="sidebar-content">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {categories.map((elm, i) => (
                    <li key={i} style={{ marginBottom: "10px" }}>
                      <a href={elm.href} className="text-16 color-text" style={{ textDecoration: "none" }}>{elm.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent Posts - Teraz w pełni automatyczne! */}
            <div className="sidebar-radius mb-40">
              <h5 className="text-20-medium sidebar-title mb-20">Recent Posts</h5>
              <div className="sidebar-content">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {dynamicRecentPosts.map((elm, i) => (
                    <li key={i} style={{ marginBottom: "20px" }}>
                      <div className="recent-post" style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                        <div className="image-post">
                          <Link href={`/blog/${elm.slug}`}>
                            <Image
                              width={80}
                              height={80}
                              src={elm.imageSrc}
                              style={{ borderRadius: "8px", objectFit: "cover" }}
                              alt={elm.title}
                            />
                          </Link>
                        </div>
                        <div className="info-post">
                          {/* Wyświetlamy datę w prostszy sposób dla sidebaru */}
                          <div className="text-12 color-text" style={{ opacity: 0.5, marginBottom: "4px" }}>
                             {elm.monthYear}
                          </div>
                          <Link href={`/blog/${elm.slug}`} className="text-16 color-text-main" style={{ fontWeight: "600", lineHeight: "1.4" }}>
                            {elm.title.substring(0, 45)}...
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tagi */}
            <div className="sidebar-radius">
              <h5 className="text-20-medium sidebar-title mb-20">Popular Tags</h5>
              <div className="sidebar-content">
                {tags.map((elm, i) => (
                  <a
                    key={i}
                    className="btn btn-tag mb-10 mr-10"
                    href={elm.href}
                    style={{ fontSize: "12px", padding: "8px 15px" }}
                  >
                    {elm.name}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}