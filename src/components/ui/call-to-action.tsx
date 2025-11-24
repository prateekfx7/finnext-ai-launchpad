import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Get started</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Start Investing Smarter Today
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Join thousands of investors who trust our AI-powered platform to make better investment decisions. Get personalized recommendations and real-time insights.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4" variant="outline">
              Schedule a Demo <PhoneCall className="w-4 h-4" />
            </Button>
            <ShimmerButton
              className="gap-4 h-11 px-8 text-base"
              background="hsl(var(--primary))"
              shimmerColor="hsl(var(--primary-foreground))"
            >
              <span className="font-medium">Get Started Free</span>
              <MoveRight className="w-4 h-4" />
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
