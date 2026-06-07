import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16">
      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Claude Next.js Starter Kit
        </h1>
        <p className="text-muted-foreground">
          Next.js, TypeScript, Tailwind CSS, shadcn/ui로 구성된 강의 미션용
          스타터 킷입니다. 아래 Card와 Button 예시를 참고해서 미션을
          시작해보세요.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>미션 1. 페이지 만들기</CardTitle>
            <CardDescription>
              App Router 기반으로 새로운 라우트를 추가해보세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              `src/app` 아래에 폴더를 만들고 `page.tsx`를 작성하면 새 페이지가
              생성됩니다.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>미션 2. 컴포넌트 추가하기</CardTitle>
            <CardDescription>
              shadcn/ui CLI로 필요한 컴포넌트를 추가해보세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              `npx shadcn@latest add &lt;component&gt;` 명령으로 원하는
              컴포넌트를 손쉽게 추가할 수 있습니다.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Button 예시</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>
    </div>
  );
}
