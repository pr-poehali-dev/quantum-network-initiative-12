export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">БУКВА*КНИГИ</div>
        <nav>
          <a href="#">Каталог</a>
          <a href="#">О нас</a>
          <a href="#">События</a>
          <a href="#">Адрес</a>
        </nav>
        <button className="btn-cta">Найти книгу</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЧИТАЙ.
              <br />
              ЖИВИ <span>ЯРЧЕ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Уютный книжный магазин с душой. Тысячи книг, советы настоящих читателей и атмосфера, в которой хочется остаться подольше.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть каталог
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                О магазине
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              НОВИНКИ
              <br />
              УЖЕ ЗДЕСЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЧИТАЕМ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              УЮТНО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КНИГИ КОТОРЫЕ МЕНЯЮТ * УЮТНЫЙ ЧИТАЛЬНЫЙ ЗАЛ * СОБЫТИЯ КАЖДУЮ НЕДЕЛЮ * КОФЕ И ЧТЕНИЕ * ЛУЧШИЙ ВЫБОР В ГОРОДЕ *
            КНИГИ КОТОРЫЕ МЕНЯЮТ * УЮТНЫЙ ЧИТАЛЬНЫЙ ЗАЛ * СОБЫТИЯ КАЖДУЮ НЕДЕЛЮ * КОФЕ И ЧТЕНИЕ * ЛУЧШИЙ ВЫБОР В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР МЕСЯЦА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Весь каталог
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Бестселлер</span>
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Классика"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Мировая классика</h3>
                  <span className="price">от 490 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Толстой, Достоевский, Чехов — издания с бережной редактурой и стильными обложками.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Новинка
              </span>
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Современная проза"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Современная проза</h3>
                  <span className="price">от 650 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Актуальные авторы, свежие истории, живой язык. Находки каждую неделю.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Нон-фикшн"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Нон-фикшн</h3>
                  <span className="price">от 750 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Наука, психология, бизнес, история — книги, которые расширяют кругозор.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЕСТО, ГДЕ ВРЕМЯ ЗАМИРАЕТ.</h2>
            <p className="vibe-text">
              Мы не просто продаём книги. Мы создаём пространство для чтения, размышлений и живого общения. Уютные кресла, аромат
              кофе, полки до потолка — приходи, и уходить не захочется. Клубы по интересам, авторские встречи, тихие читальные
              вечера.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @BUKVA.KNIGI
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Книги"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Магазин"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1533327325824-76851d61c85a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Чтение"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">БУКВА*КНИГИ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Твоё место для чтения, открытий и хороших разговоров. Книги, которые меняют жизнь — с 2024 года.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Каталог
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                События
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 10:00–21:00</li>
            <li>Сб–Вс: 10:00–22:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 700 }}>Всегда рады гостям</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>ул. Книжная, 7</li>
            <li>+7 (900) 000-00-00</li>
            <li>hello@bukvaknigi.ru</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
