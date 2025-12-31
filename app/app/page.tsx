import { Button } from "@/components/ui/button"

export default function AppPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">App Dashboard</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Welcome to the application area.
      </p>
      <Button>Click me</Button>
    </div>
  )
}
