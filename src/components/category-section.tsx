import Link from "next/link";
import {
  ListChecks,
  PieChart,
  LineChart,
  Triangle,
  Sigma,
  SquareRadical,
  Ruler,
  Atom,
  FlaskConical,
  Cog,
  Binary,
  Globe,
  Gem,
  Users,
  Film,
  Calendar,
  Languages,
  PiggyBank,
  Apple,
  Landmark,
  HeartPulse,
  Library,
  Music,
  Grape,
  Calculator,
  Image,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    title: "Mathematics",
    color: "text-purple-600",
    items: [
      {
        icon: <ListChecks className="w-7 h-7" />,
        label: "Step-by-Step Solutions",
        href: "#",
      },
      {
        icon: <PieChart className="w-7 h-7" />,
        label: "Elementary Math",
        href: "#",
      },
      {
        icon: <span className="text-2xl font-light">x²-1</span>,
        label: "Algebra",
        href: "#",
      },
      {
        icon: <LineChart className="w-7 h-7" />,
        label: "Plotting & Graphics",
        href: "#",
      },
      {
        icon: <Sigma className="w-7 h-7" />,
        label: "Calculus & Analysis",
        href: "#",
      },
      {
        icon: <Triangle className="w-7 h-7" />,
        label: "Geometry",
        href: "#",
      },
      {
        icon: <SquareRadical className="w-7 h-7" />,
        label: "Differential Equations",
        href: "#",
      },
    ],
  },
  {
    title: "Science & Technology",
    color: "text-green-600",
    items: [
      {
        icon: <Ruler className="w-7 h-7" />,
        label: "Units & Measures",
        href: "#",
      },
      { icon: <Atom className="w-7 h-7" />, label: "Physics", href: "#" },
      {
        icon: <FlaskConical className="w-7 h-7" />,
        label: "Chemistry",
        href: "#",
      },
      { icon: <Cog className="w-7 h-7" />, label: "Engineering", href: "#" },
      {
        icon: <Binary className="w-7 h-7" />,
        label: "Computational Sciences",
        href: "#",
      },
      {
        icon: <Globe className="w-7 h-7" />,
        label: "Earth Sciences",
        href: "#",
      },
      { icon: <Gem className="w-7 h-7" />, label: "Materials", href: "#" },
    ],
  },
  {
    title: "Society & Culture",
    color: "text-red-600",
    items: [
      { icon: <Users className="w-7 h-7" />, label: "People", href: "#" },
      { icon: <Film className="w-7 h-7" />, label: "Arts & Media", href: "#" },
      {
        icon: <Calendar className="w-7 h-7" />,
        label: "Dates & Times",
        href: "#",
      },
      {
        icon: <Languages className="w-7 h-7" />,
        label: "Words & Linguistics",
        href: "#",
      },
      {
        icon: <PiggyBank className="w-7 h-7" />,
        label: "Money & Finance",
        href: "#",
      },
      {
        icon: <Apple className="w-7 h-7" />,
        label: "Food & Nutrition",
        href: "#",
      },
      {
        icon: <Landmark className="w-7 h-7" />,
        label: "Political Geography",
        href: "#",
      },
    ],
  },
  {
    title: "Everyday Life",
    color: "text-cyan-600",
    items: [
      {
        icon: <HeartPulse className="w-7 h-7" />,
        label: "Personal Health",
        href: "#",
      },
      {
        icon: <Library className="w-7 h-7" />,
        label: "Personal Finance",
        href: "#",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path d="M11.68,12.23C11.43,12.13 11.2,12 11,12s-0.43,0.13 -0.68,0.23C8.44,13.04 6.67,15.21 6.13,17.5H15.87C15.33,15.21 13.56,13.04 11.68,12.23M15.5,10.5c0.83,0 1.5,-0.67 1.5,-1.5s-0.67,-1.5 -1.5,-1.5s-1.5,0.67 -1.5,1.5s0.67,1.5 1.5,1.5M6.5,10.5c0.83,0 1.5,-0.67 1.5,-1.5S7.33,7.5 6.5,7.5S5,8.17 5,9S5.67,10.5 6.5,10.5M11,6c-0.67,0 -1.27,0.22 -1.77,0.62c-0.34,0.27 -0.55,0.7 -0.55,1.15c0,0.46 0.22,0.89 0.55,1.16C9.73,9.29 10.33,9.5 11,9.5s1.27,-0.21 1.77,-0.59C13.11,8.65 13.32,8.22 13.32,7.77c0,-0.45 -0.21,-0.88 -0.55,-1.15C12.27,6.22 11.67,6 11,6M19.5,4c0.83,0 1.5,-0.67 1.5,-1.5S20.33,1 19.5,1S18,1.67 18,2.5S18.67,4 19.5,4Z" />
          </svg>
        ),
        label: "Surprises",
        href: "#",
      },
      {
        icon: <Music className="w-7 h-7" />,
        label: "Entertainment",
        href: "#",
      },
      {
        icon: <Grape className="w-7 h-7" />,
        label: "Household Science",
        href: "#",
      },
      {
        icon: <Calculator className="w-7 h-7" />,
        label: "Household Math",
        href: "#",
      },
      { icon: <Image className="w-7 h-7" />, label: "Hobbies", href: "#" },
    ],
  },
];

export function CategorySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title}>
              <h3
                className={`flex items-center text-lg font-semibold leading-6 ${category.color}`}
              >
                <Link href="#" className="hover:underline">
                  {category.title}
                </Link>
                <ChevronRight className="h-4 w-4 ml-1" />
              </h3>
              <div className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-x-3 rounded-md border p-3 text-base leading-7 text-gray-700 hover:bg-gray-50"
                  >
                    <div className={`flex-none ${category.color}`}>
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
