import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

const inspirations = [
  "Family Portraits",
  "Syrian Heritage",
  "Mella & Lemar",
  "Mom & Dad",
  "Mathematics",
  "Heavy Metal",
  "Classical Masters",
  "Michelangelo",
  "Leonardo da Vinci",
  "Cinema Portraits",
  "Childhood Memories",
  "Damascus Light",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About — Jay</title>
        <meta
          name="description"
          content="Meet Jay, a Syrian visual artist born in 2007 who paints stories of family, heritage, and the music she loves."
        />
      </Helmet>

      <Layout>
        <div className="page-transition px-6 py-10 lg:px-10 lg:py-12">
          {/* Main Content Grid */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            {/* Bio Content */}
            <div 
              className="flex flex-col justify-start"
              style={{
                opacity: 0,
                animation: "staggerFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: "0ms"
              }}
            >
              {/* Header */}
              <div className="mb-6">
                <h1 className="font-display text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                  Hello, I'm Jay
                </h1>
                <p className="mt-1 text-base text-muted-foreground">
                  Visual Artist · Born 2007 · Syria
                </p>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px w-full bg-border" />

              {/* Bio Text */}
              <div className="space-y-5 text-sm leading-relaxed text-foreground/80">
                <p>
                  I'm Jay — a Syrian artist, born in 2007. I grew up between two loves: the quiet logic of mathematics and the loud, restless world of paint. One taught me patience, the other taught me how to feel out loud.
                </p>
                <p>
                  My family is the center of everything I make. My mom, my dad, and my sisters Mella and Lemar are woven into almost every canvas — sometimes literally, sometimes in the way a light falls, a hand rests, a shoulder leans. They are my first audience and my favorite subjects.
                </p>
                <p>
                  I'm drawn to stories. To children sitting in rubble who still hold their dolls. To grandfathers holding grandchildren by a window. To the masters — Michelangelo, da Vinci — and what happens when a teenager from Syria reinterprets them in her own colors.
                </p>
                <p>
                  Off the easel, I'm probably solving equations, listening to metal way too loud, or arguing with my sisters about absolutely nothing. I believe painting is just another language for the things we can't say out loud yet.
                </p>
              </div>
            </div>
          </div>

          {/* Inspirations Section */}
          <div 
            className="mt-16"
            style={{
              opacity: 0,
              animation: "staggerFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              animationDelay: "300ms"
            }}
          >
            <h2 className="mb-8 font-display text-lg font-medium tracking-tight text-foreground">
              Inspirations & Influences
            </h2>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {inspirations.map((item, index) => (
                <span
                  key={index}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground link-underline w-fit"
                  style={{
                    opacity: 0,
                    animation: "staggerFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    animationDelay: `${400 + index * 50}ms`
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
