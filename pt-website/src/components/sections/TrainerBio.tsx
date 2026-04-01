import { Award } from "lucide-react";
import Container from "../ui/Container";
import { trainer } from "../../../content/trainer";

export default function TrainerBio() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-32 h-32 rounded-full bg-brand-primary/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-brand-primary">
                  {trainer.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <p className="text-sm text-brand-gray">
                Add your photo at<br />
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">public/images/trainer.jpg</code>
              </p>
            </div>
          </div>

          {/* Bio Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-2">
              Meet {trainer.name}
            </h2>
            <p className="text-brand-primary font-semibold mb-6">
              {trainer.title}
            </p>
            <div className="space-y-4 text-brand-gray leading-relaxed">
              {trainer.bio.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Philosophy */}
            <div className="mt-8 p-6 bg-brand-light rounded-xl border-l-4 border-brand-primary">
              <h3 className="font-bold text-brand-dark mb-2">My Philosophy</h3>
              <p className="text-sm text-brand-gray italic">{trainer.philosophy}</p>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="font-bold text-brand-dark mb-4">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trainer.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 text-sm text-brand-gray"
                  >
                    <Award className="h-4 w-4 text-brand-primary flex-shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
