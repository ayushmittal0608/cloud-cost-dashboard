import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export function AnomalyCards() {
  return (
    <div className='*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-4 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6'>
      <Card className='@container/card'>
        <CardHeader className='relative'>
          <CardDescription>Anomalies Detected (MTD)</CardDescription>
          <CardTitle className='@[250px]/card:text-3xl text-2xl font-semibold tabular-nums'>
            $1,250.00
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className='@container/card'>
        <CardHeader className='relative'>
          <CardDescription>Total Cost Impact (MTD)</CardDescription>
          <CardTitle className='@[250px]/card:text-3xl text-2xl font-semibold tabular-nums'>
            1,234
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className='@container/card'>
        <CardHeader className='relative'>
          <CardDescription>Total Spend (MTD)</CardDescription>
          <CardTitle className='@[250px]/card:text-3xl text-2xl font-semibold tabular-nums'>
            118
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className='@container/card'>
        <CardHeader className='relative'>
          <CardDescription>Total Spend (vs. last month)</CardDescription>
          <CardTitle className='@[250px]/card:text-3xl text-2xl font-semibold tabular-nums'>
            382
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
