// Renders a schema.org object (or array of objects) as a JSON-LD <script>
// tag. Server component — safe to drop into any page/layout.
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
