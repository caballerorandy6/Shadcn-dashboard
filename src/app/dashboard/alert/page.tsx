import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Page() {
  return (
    <div className="grid gap-3">
      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
