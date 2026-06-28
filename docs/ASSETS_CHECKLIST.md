# Assets Checklist — lehetre.vn

> Tất cả file cần chuẩn bị trước khi build web.

---

## Brand Design System (confirmed từ Credential 2026)

### Colors

| Role | HEX | Dùng ở đâu |
|------|-----|-----------|
| Background chính | `#0D0D0D` | Nền toàn trang |
| Card / Surface | `#161616` | Card services, case study |
| Surface raised | `#1E1E1E` | Hover state, input fields |
| Primary Orange | `#FF5500` | Logo, CTA, border card, bullet, số liệu KPI |
| Orange Dark | `#CC4400` | Hover CTA, gradient end |
| White | `#FFFFFF` | Heading chính |
| Text Secondary | `#A0A0A0` | Body copy, sub-text |
| Divider | `#2A2A2A` | Border nhạt, separator |

### Typography

| Role | Font | Weight | Source |
|------|------|--------|--------|
| Logo | Orbitron | 700 | Google Fonts |
| Display (Hero, H1 lớn) | Bebas Neue | 400 | Google Fonts |
| Section Title | Inter | 700-800 | Google Fonts |
| Body | Inter | 400-500 | Google Fonts |
| Label / Badge | Inter | 600 | Google Fonts |

### Design Language & UI Patterns

**Cards:**
- Background: `#161616`
- Border: 1px solid `#FF5500`
- Corner accent: diagonal orange stripes (bottom-right)
- Padding: 24–32px

**Badges / Labels:**
- "Challenge" / "Strategy" / "Impact" → pill shape, bg `#FF5500`, text white, border-radius 4px

**Bullet points:**
- Filled orange circle `●` trước mỗi dòng service/feature

**Section numbers:**
- "01." "02." "03." — Bebas Neue, size lớn, màu `#FF5500`, bottom-right của card

**Background watermark:**
- Text lớn mờ ở cuối section (ví dụ "CORPORATE EVENTS") — opacity 5–8%, white

**Photo frames:**
- Border 1–2px orange, có thể thêm corner bracket kiểu HUD

**Info boxes (Contact):**
- Icon + text, bg `#1E1E1E`, border orange, border-radius 8px

**Geometric texture:**
- Diagonal dark pattern trên background (thấy rõ ở trang Contact)

---

## Logo & Brand Files

- [ ] Logo LEHETRE — SVG (on dark bg — version đang dùng trong PDF)
- [ ] Logo LEHETRE — SVG (standalone, không có tagline)
- [ ] Favicon (32x32, 64x64) — icon ngôi sao trong logo
- [ ] OG Image (1200x630) — cover dùng khi share lên social

---

## Hình ảnh sự kiện (Case Studies)

Cần ảnh 16:9, tối thiểu 1200x675px.

| Case | File | Status |
|------|------|--------|
| VIETMAP Digital Campaign | | ⬜ |
| Panasonic Social Commerce | | ⬜ |
| VIETMAP x TEYES Launch | | ⬜ |
| VIETMAP REVO 24 Gala | vietmap-revo24.jpg (từ PDF) | ⬜ |
| Panasonic x Kay Tran | | ⬜ |
| Aeon Mall Activation | | ⬜ |
| Troll Xe 5th Anniversary | | ⬜ |
| VIMS 2024 | | ⬜ |
| Scientific Conference | | ⬜ |
| Techcombank Marathon | | ⬜ |

---

## Logo khách hàng

Cần PNG nền trong hoặc SVG, version màu trắng để dùng trên nền tối.

- [ ] VIETMAP
- [ ] Panasonic
- [ ] TEYES
- [ ] Techcombank
- [ ] Các brand khác

---

## Hình ảnh khác

- [ ] Hero section background (ảnh/video event hoành tráng nhất)
- [ ] Person photo — đã thấy trong trang Contact (team member)
- [ ] Office / workspace

---

## Đặt file vào đây

```
public/
├── images/
│   ├── logo/           ← Logo SVG, favicon
│   ├── cases/          ← Thumbnail từng case study
│   └── clients/        ← Logo clients (white version)
└── fonts/              ← Không cần nếu dùng Google Fonts
```
