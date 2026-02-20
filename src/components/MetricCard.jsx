import { Card, CardContent } from "./ui/card"

export default function MetricCard({
  title,
  value,
  description,
  trend
}) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6 space-y-2">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <h2 className="text-3xl font-bold">
          {value}
        </h2>

        <p className="text-sm text-muted-foreground flex items-center justify-between">
          {description}
          <span className="text-green-500 font-medium">
            {trend}
          </span>
        </p>
      </CardContent>
    </Card>
  )
}