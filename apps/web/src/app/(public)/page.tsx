import { Button, Switch } from "@roadcore/ui";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold text-foreground">RoadCore Platform</h1>
      <p className="text-muted">Public surface placeholder — see docs/04-modules/marketplace.md.</p>
      <div className="flex items-center gap-4">
        <Button variant="primary">Request a quote</Button>
        <Switch label="Notify me" />
      </div>
    </main>
  );
}
