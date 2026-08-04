import { Button, Input, Textarea } from "@roadcore/ui";

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16 sm:py-20 lg:flex-row lg:gap-16">
      <div className="flex-1">
        <h1 className="text-3xl font-semibold text-foreground">Get in touch</h1>
        <p className="mt-2 max-w-md text-muted">
          Questions about a listing, a freight request or the platform itself — send a message
          and the team will get back to you.
        </p>
        <dl className="mt-8 flex flex-col gap-4 text-sm">
          <div>
            <dt className="font-medium text-foreground">E-mail</dt>
            <dd className="text-muted">hello@example.com</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Phone</dt>
            <dd className="text-muted">+55 (00) 0000-0000</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-muted">
          Placeholder contact details — see docs/01-business/white-label.md for per-tenant
          institutional data.
        </p>
      </div>

      <form className="flex flex-1 flex-col gap-4 rounded-lg border border-border bg-surface-elevated p-6">
        <Input aria-label="Name" name="name" placeholder="Name" />
        <Input aria-label="E-mail" name="email" type="email" placeholder="E-mail" />
        <Textarea aria-label="Message" name="message" placeholder="Message" rows={5} />
        <Button variant="primary" type="submit" className="self-start">
          Send message
        </Button>
      </form>
    </main>
  );
}
