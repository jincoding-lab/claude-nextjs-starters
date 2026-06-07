# Claude Next.js Starter Kit

강의 미션용으로 사용하는 최소 구성의 Next.js Starter Kit입니다. 인증, DB 연동,
결제, 관리자 페이지 등 복잡한 기능 없이 레이아웃 구조와 shadcn/ui 컴포넌트
사용 예시만 담겨 있습니다.

## 기술 스택

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## 폴더 구조

```
src/
├── app/
│   ├── layout.tsx       # Header / Main / Footer로 감싸는 루트 레이아웃
│   ├── page.tsx         # 홈 페이지 (Button / Card 사용 예시)
│   └── globals.css      # Tailwind CSS + shadcn 테마 토큰
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/              # shadcn/ui 컴포넌트 (button, card 등)
└── lib/
    └── utils.ts         # shadcn cn 유틸
```

## 시작하기

의존성을 설치하고 개발 서버를 실행합니다.

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

`src/app/page.tsx`를 수정하면서 미션을 진행하면 됩니다.

## shadcn/ui 컴포넌트 추가하기

필요한 컴포넌트는 CLI로 추가할 수 있습니다.

```bash
npx shadcn@latest add <component>
```

예를 들어 `dialog` 컴포넌트가 필요하다면 다음과 같이 실행합니다.

```bash
npx shadcn@latest add dialog
```

추가된 컴포넌트는 `src/components/ui/`에 생성되며, `@/components/ui/<component>`
경로로 불러와 사용할 수 있습니다.
