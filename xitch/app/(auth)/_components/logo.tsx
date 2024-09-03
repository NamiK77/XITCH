import Image from 'next/image'; // Import with the correct casing
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image 
          src="/duck.png" 
          alt="Duck" 
          height={80} 
          width={80} 
        />
      </div>
      <div className={cn('flex flex-col items-center',font.className)}>
        <p className=
            "text-xl font-semibold">
            Xitch

        </p>
        <p className=
            "text-sm  font-semibold text-white text-muted-foreground">
            Let's Go Guy's
        </p>

      </div>
    </div>
  );
};
