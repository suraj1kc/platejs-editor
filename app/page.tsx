import Link from 'next/link';

import { buttonVariants } from '@/components/plate-ui/button';
import { PlateEditor } from '@/components/PlateEditor';

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Plate Template.
        </h1>
      </div>

      <div className="flex w-full flex-col gap-4">
        <PlateEditor />
      </div>
    </section>
  );
}