# Website Plan — lehetre.vn

## Mục tiêu
Portfolio/Brochure + Lead Generation cho LEHETRE O2O Marketing Agency.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Form:** React Hook Form + EmailJS hoặc Resend
- **Deploy:** Vercel (free tier đủ dùng)
- **Domain:** lehetre.vn

---

## Sitemap

```
lehetre.vn/
├── /                    → Homepage
├── /about               → Về chúng tôi
├── /services            → Dịch vụ
│   ├── #digital         → Digital Strategy & Performance
│   ├── #events          → Event Management & Production
│   └── #o2o             → O2O Brand Activation
├── /work                → Case Studies / Portfolio
└── /contact             → Liên hệ + Form
```

---

## Homepage sections (thứ tự)

1. **Hero** — Tagline + CTA "Xem dự án" & "Liên hệ ngay"
2. **About snapshot** — 3 điểm USP của LEHETRE
3. **Services** — 3 dịch vụ chính, mỗi cái có icon + mô tả ngắn
4. **Case Studies** — 4–6 project nổi bật dạng grid/card
5. **Clients** — Logo khách hàng
6. **CTA Section** — "Sẵn sàng tạo impact?" + form liên hệ nhanh
7. **Footer** — Thông tin liên hệ, social links

---

## Yêu cầu thiết kế

- **Màu sắc:** Dựa theo brand LEHETRE (cần bổ sung brand color code)
- **Cảm giác:** Premium, bold, data-driven — không được trông "cheap agency"
- **Mobile-first:** Phần lớn traffic từ mobile
- **SEO:** Meta tags đầy đủ, OG image, schema markup cho agency

---

## Lead Generation

- Form liên hệ trên trang `/contact` và section CTA cuối homepage
- Fields: Tên, Email, SĐT, Loại dịch vụ quan tâm, Mô tả ngắn dự án
- Gửi email thông báo về duongtrung@lehetre.vn khi có lead mới

---

## Nội dung cần chuẩn bị

- [ ] Brand colors (hex codes)
- [ ] Logo file (SVG)
- [ ] Hình ảnh các sự kiện đã tổ chức (cho case studies)
- [ ] Logo khách hàng (VIETMAP, Panasonic, v.v.)
- [ ] Photo team / office (cho trang About)
- [ ] Nội dung copy từng page (dựa vào Credential 2026)

---

## Cấu trúc thư mục

```
Web_LEHETRE/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout, metadata
│   │   ├── page.tsx            ← Homepage
│   │   └── (pages)/
│   │       ├── about/page.tsx
│   │       ├── services/page.tsx
│   │       ├── work/page.tsx
│   │       └── contact/page.tsx
│   ├── components/
│   │   ├── layout/             ← Navbar, Footer
│   │   ├── sections/           ← Hero, Services, CaseStudies, CTA...
│   │   └── ui/                 ← Button, Card, Badge (reusable)
│   ├── lib/                    ← Data, utils, constants
│   └── styles/                 ← Global CSS, Tailwind config
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── cases/              ← Ảnh case studies
│   │   └── clients/            ← Logo clients
│   └── fonts/
└── docs/                       ← File plan này
```

---

## Giai đoạn phát triển

| Giai đoạn | Nội dung | Timeline |
|-----------|---------|---------|
| 1. Setup | Init Next.js, Tailwind, cấu trúc | |
| 2. Design | Màu sắc, typography, components cơ bản | |
| 3. Content | Điền nội dung từ Credential | |
| 4. Build | Code từng page | |
| 5. Test | Cross-browser, mobile, performance | |
| 6. Deploy | Vercel + domain lehetre.vn | |
