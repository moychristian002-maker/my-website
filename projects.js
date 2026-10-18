// To add a project: put its images in images/<folder>/ and add an entry here,
// plus a color world and a description at the bottom of this file.
// The first image in the list is used as the cover. `category` must match a filter below.
const categories = ["Apparel & Objects", "Architecture", "Graphic & Interaction", "Photography"];

const projects = [
  {
    title: "Britpop in the Streets",
    tag: "LADES4143 Design Perspectives · Design in London Exhibition",
    category: "Apparel & Objects",
    folder: "design-perspectives-britpop-jeans",
    crop: {
      "20251015-132707498-ios.jpg": "whole",
      "design-perspectives-exhibition.jpg": "whole",
      "pants.jpg": "whole",
    },
    details: [
      ["course", "LADES4143 Design Perspectives"],
      ["professor", "Tom Critchley"],
      ["materials", "Thrifted jeans, tie, acrylic paint and medium, keychains and pant charms, needle and thread, transfer paper"],
    ],
    images: ["20251016-131807414-ios.jpg"],
    sections: [
      ["research", ["design-perspectives-exhibition.jpg", "pants.jpg"]],
      ["making", ["20251015-162148581-ios.jpg", "20251015-213942165-ios.jpg", "20251016-025705095-ios.jpg", "20251016-025707684-ios.jpg"]],
      ["at design in london", ["20251015-132707498-ios.jpg", "20251016-130604196-ios.jpg", "20251016-130609928-ios.jpg", "20251016-130616885-ios.jpg", "20251016-131807173-ios.jpg"]],
    ],
  },
  {
    title: "Olivia Dean Shirt",
    tag: "Apparel · Hand Embroidery",
    category: "Apparel & Objects",
    folder: "olivia-dean-shirt",
    crop: {
      "img-1638.jpg": "whole",
      "img-1639.jpg": "whole",
      "img-1640.jpg": "whole",
      "img-1641.jpg": "whole",
      "img-1642.jpg": "whole",
      "img-2843.jpg": "whole",
    },
    images: ["img-2857.jpg"],
    sections: [
      ["process", ["bookshelf-hoop.jpg", "img-1638.jpg", "img-1639.jpg", "img-1640.jpg"]],
      ["reference", ["img-2726.jpg", "img-1641.jpg", "img-1642.jpg", "img-2843.jpg"]],
      ["embroidery", ["img-2793.jpg", "img-2835.jpg", "img-2841.jpg", "img-2829.jpg", "img-2842.jpg"]],
      ["at the concert", ["img-2924.jpg", "img-3009.jpg", "dsc04699.jpg", "dsc04701.jpg"]],
    ],
    captions: {
      "bookshelf-hoop.jpg": "practice piece: learning to embroider before the shirts",
      "img-2726.jpg": "typeface reference, found on Pinterest",
    },
  },
  {
    title: "Custom Denim Jacket",
    tag: "Apparel · Hand Painting",
    category: "Apparel & Objects",
    folder: "custom-denim",
    crop: {
      "sketch.jpg": "whole",
    },
    details: [
      ["materials", "Denim jacket, acrylic paint and medium"],
    ],
    images: ["img-1658.jpg"],
    sections: [
      ["inspiration", ["inspiration-peachypaintshop.jpg"]],
      ["design", ["sketch.jpg", "ai-mockup.jpg"]],
      ["painting", ["img-0955.jpg", "painting-img-1654.mp4", "img-1660.jpg", "painting-img-1656.mp4", "img-1661.jpg"]],
      ["the gift", ["img-6783.jpg"]],
    ],
    captions: {
      "inspiration-peachypaintshop.jpg": "design inspiration by @peachypaintshop on Etsy, found on Pinterest",
      "sketch.jpg": "my sketch of the design",
      "ai-mockup.jpg": "AI-generated color mockup, based on my sketch",
      "img-6783.jpg": "my friend wearing the jacket",
    },
  },
  {
    title: "Senior Shirt",
    tag: "Apparel · Appliqué & Embroidery",
    category: "Apparel & Objects",
    folder: "senior-shirt",
    crop: {
      "20260831-033155072-ios.jpg": "whole",
      "img-1717.jpg": "5% 50%",
      "img-7672.jpg": "16% 50%",
    },
    images: ["20260831-214656384-ios.jpg"],
    sections: [
      ["stitching", ["20260831-033155072-ios.jpg"]],
      ["details", ["20260831-033207602-ios.jpg", "20260831-033215446-ios.jpg", "20260831-033228773-ios.jpg", "img-3284.jpg"]],
      ["the shirt", ["20260831-214656384-ios.jpg", "20260831-214726736-ios.jpg"]],
      ["worn", ["img-1717.jpg", "img-7672.jpg"]],
    ],
  },
  {
    title: "Custom Basketball",
    tag: "Product Design · Hand Painting",
    category: "Apparel & Objects",
    folder: "custom-basketball",
    details: [
      ["materials", "Basketball, acrylic paint, Posca paint pens, Sharpie, paper"],
    ],
    images: ["img-1573.jpg"],
    sections: [
      ["inspiration", ["gift-from-friend-1.jpg", "gift-from-friend-2.jpg"]],
      ["little things about him", ["digitized-player.jpg", "brooklyn-bridge.jpg", "digitized-wilson.jpg", "digitized-timmy-time.jpg"]],
      ["painting", ["img-1561.jpg", "img-1567.jpg"]],
      ["every angle", ["img-1568.jpg", "img-0945.jpg", "img-1571.jpg", "bridge-side.mp4"]],
    ],
    captions: {
      "gift-from-friend-1.jpg": "the ball my friend customized for my birthday",
      "digitized-player.jpg": "my digitized drawing of him dribbling",
      "brooklyn-bridge.jpg": "the Brooklyn Bridge at night",
    },
    crop: {
      "gift-from-friend-1.jpg": "50% 72%",
      "gift-from-friend-2.jpg": "50% 75%",
      "digitized-player.jpg": "whole",
      "brooklyn-bridge.jpg": "whole",
      "digitized-wilson.jpg": "whole",
      "digitized-timmy-time.jpg": "whole",
      "img-1561.jpg": "50% 70%",
      "img-1567.jpg": "55% 50%",
      "img-1568.jpg": "50% 45%",
      "img-0945.jpg": "62% 50%",
      "img-1571.jpg": "50% 60%",
      "bridge-side.mp4": "50% 70%",
    },
  },
  {
    title: "Custom Totes",
    tag: "Product Design · Merchandise",
    category: "Apparel & Objects",
    folder: "custom-totes",
    images: ["dsc02234.jpg"],
    sections: [
      ["references (found online)", ["ref-seashells.jpg", "ref-trees.jpg", "ref-us-map.jpg", "ref-ivy.jpg", "ref-chipmunk.jpg"]],
      ["process", ["img-2161.jpg"]],
      ["the totes", ["img-2169.jpg", "img-2166.jpg", "img-2167.jpg", "img-2170.jpg", "img-2172.jpg", "img-2173.jpg"]],
    ],
    captions: {
      "img-2161.jpg": "my sketches, laid out with the totes",
    },
    crop: {
      "img-2166.jpg": "62% 50%",
      "img-2167.jpg": "50% 58%",
      "img-2170.jpg": "57% 50%",
      "img-2172.jpg": "73% 50%",
      "img-2173.jpg": "84% 50%",
      "ref-seashells.jpg": "whole",
      "ref-trees.jpg": "whole",
      "ref-us-map.jpg": "whole",
      "ref-ivy.jpg": "whole",
      "ref-chipmunk.jpg": "whole",
    },
  },
  {
    title: "The Resting Line",
    tag: "Pavilion · Model & Axonometric",
    category: "Architecture",
    folder: "architecture-pavilion",
    crop: {
      "0f388bec-a149-4c7e-88c0-a62f68e508a5.jpg": "whole",
      "60cd3d24-203b-40f4-8562-266551f4b4f1.jpg": "whole",
    },
    images: ["img-5254.jpg"],
    sections: [
      ["the model", ["img-5257.jpg"]],
      ["drawings", ["60cd3d24-203b-40f4-8562-266551f4b4f1.jpg", "0f388bec-a149-4c7e-88c0-a62f68e508a5.jpg"]],
    ],
  },
  {
    title: "Frame by Frame",
    tag: "Subelement 1 · LADES4139 Fundamental Architectural Design",
    category: "Architecture",
    folder: "architecture-cube",
    details: [
      ["course", "LADES4139 Fundamental Architectural Design"],
      ["professor", "Lena Vassilev"],
      ["materials", "1/4 in. foam board, basswood, chipboard, foam, glue"],
      ["tools", "X-Acto knife and scalpel, drafting board and pens"],
    ],
    images: ["img-5173.jpg"],
    sections: [
      ["process sketches", ["sketch-1.jpg", "sketch-2.jpg", "sketch-3.jpg"]],
      ["process models", ["cube-frame.jpg", "img-5195.jpg", "img-5201.jpg"]],
      ["elevations", ["elevation-1.jpg", "elevation-2.jpg", "elevation-3.jpg", "elevation-4.jpg"]],
      ["sections", ["section-1.jpg", "section-2.jpg"]],
      ["plans", ["plan-1.jpg", "plan-2.jpg"]],
      ["oblique", ["oblique-01.jpg"]],
      ["final cube", ["img-5186.jpg", "img-5173.jpg"]],
    ],
    // The original presentation, shown at the end as a booklet you can page through.
    booklet: [
      "booklet/page-01.jpg", "booklet/page-02.jpg", "booklet/page-03.jpg",
      "booklet/page-04.jpg", "booklet/page-05.jpg", "booklet/page-06.jpg",
    ],
    crop: {
      "sketch-1.jpg": "whole",
      "sketch-2.jpg": "whole",
      "sketch-3.jpg": "whole",
      "oblique-01.jpg": "whole",
    },
    labels: {
      "elevation-1.jpg": "elevation 1",
      "elevation-2.jpg": "elevation 2",
      "elevation-3.jpg": "elevation 3",
      "elevation-4.jpg": "elevation 4",
      "section-1.jpg": "section 1",
      "section-2.jpg": "section 2",
      "plan-1.jpg": "plan 1",
      "plan-2.jpg": "plan 2",
    },
  },
  {
    title: "Basswood Modeling",
    tag: "ArcStart 2024 · University of Michigan",
    category: "Architecture",
    folder: "arcstart-basswood",
    fit: "natural", // show every photo uncropped at its own shape
    details: [
      ["program", "ArcStart 2024, University of Michigan"],
      ["led by", "Osama Sukkar"],
      ["skills", "Tectonic design, gestural designing and modeling"],
      ["materials", "Basswood, tacky glue"],
    ],
    images: ["img-7796.jpg"],
    sections: [
      ["making", ["img-7793.jpg", "img-7794.jpg", "img-7795.jpg"]],
      ["the model", ["img-7796.jpg", "img-7800.jpg"]],
    ],
  },
  {
    title: "ArcStart: 3D Forms",
    tag: "ArcStart 2024 · Isometric Views & Patterns",
    category: "Architecture",
    folder: "arcstart-3d-forms",
    images: ["img-7768.jpg"],
    sections: [
      ["isometric views", ["forms-01.jpg", "forms-02.jpg", "forms-03.jpg", "forms-04.jpg"]],
      ["color & patterns", ["forms-06.jpg"]],
      ["paper prototype", ["img-7759.jpg", "img-7760.jpg", "img-7763.jpg", "img-7767.jpg"]],
      ["concept", ["isometric-01.jpg"]],
    ],
    crop: {
      "forms-01.jpg": "whole",
      "forms-02.jpg": "whole",
      "forms-03.jpg": "whole",
      "forms-04.jpg": "whole",
      "forms-06.jpg": "whole",
      "isometric-01.jpg": "whole",
      "img-7759.jpg": "whole",
      "img-7760.jpg": "whole",
      "img-7763.jpg": "whole",
      "img-7767.jpg": "whole",
    },
  },
  {
    title: "CineSense",
    tag: "Designing Interactive Experiences · UX",
    category: "Graphic & Interaction",
    folder: "designing-interactive-experiences",
    crop: {
      "general-user-journey-map-1.jpg": "whole",
      "haptic.jpg": "whole",
      "bsl-cinema.jpg": "whole",
      "img-1659.jpg": "whole",
      "companion.jpg": "whole",
    },
    images: ["cinesense.jpg"],
    sections: [
      ["research & ideas", ["general-user-journey-map-1.jpg", "haptic.jpg", "bsl-cinema.jpg", "img-1659.jpg"]],
      ["companion app", ["companion.jpg"]],
    ],
  },
  {
    title: "Husky Volleyball Graphics",
    tag: "Graphic Design · Northeastern Athletics",
    category: "Graphic & Interaction",
    folder: "graphics-volleyball",
    images: [
      "foggy-windowgraphic.jpg", "callaway-thirdsgraphicjim13746.jpg", "daniels-thirdsgraphicjim14619.jpg",
      "king-thirdjim14226.jpg", "meirelles-thirdsgraphicjim14204.jpg",
    ],
  },
  {
    title: "Ukrainian Melodies",
    tag: "Graphic Design · Poster Series",
    category: "Graphic & Interaction",
    folder: "graphics-ukrainian-melodies",
    crop: {
      "20261013-163845580-ios.jpg": "whole",
      "20261013-163846071-ios.jpg": "whole",
      "20261013-163847681-ios.jpg": "whole",
      "20261013-163848022-ios.jpg": "whole",
    },
    images: [
      "20261013-164409000-ios.jpg", "20261013-163845580-ios.jpg", "20261013-163846071-ios.jpg",
      "20261013-163847681-ios.jpg", "20261013-163848022-ios.jpg",
    ],
  },
  {
    title: "Dawn of the Mourning Son",
    tag: "Graphic Design · Theater Poster",
    category: "Graphic & Interaction",
    folder: "graphics",
    images: ["dawn-of-the-mourning-son.jpg"],
  },
  {
    title: "Handwritten Typography",
    tag: "Typography · Custom Typeface",
    category: "Graphic & Interaction",
    folder: "handwritten-typography",
    crop: {
      "handwritten-typography2.jpg": "whole",
    },
    images: ["handwritten-typography1.jpg", "handwritten-typography2.jpg"],
  },
  {
    title: "TEDxNortheasternLDN",
    tag: "Event Design · 22 ft. Sign",
    category: "Graphic & Interaction",
    folder: "tedx",
    images: ["copy-of-img-5242.jpg", "copy-of-img-5299.jpg"],
  },
  {
    title: "The Basics of Volley",
    tag: "Northeastern Women’s Volleyball",
    category: "Photography",
    folder: "photography-sports",
    images: ["0p1a4392.jpg"],
    sections: [
      ["practice", ["0p1a4399.jpg", "0p1a4414.jpg", "0p1a4435.jpg", "0p1a4551.jpg", "0p1a4563.jpg"]],
      ["game day", ["20260926-171918000-ios.jpg", "20260926-175621000-ios.jpg", "20260926-180555000-ios.jpg", "20260926-181336000-ios.jpg", "20260926-185303000-ios.jpg", "20260926-193210000-ios.jpg", "20260926-223622000-ios.jpg", "20260926-223640000-ios.jpg"]],
    ],
  },
  {
    title: "The Art of Flânerie",
    tag: "ARTF1110 Making Things",
    category: "Photography",
    folder: "making-things-flanerie",
    crop: {
      "flanerie-01.jpg": "whole",
      "flanerie-02.jpg": "whole",
      "flanerie-03.jpg": "whole",
      "flanerie-04.jpg": "whole",
      "flanerie-05.jpg": "whole",
      "flanerie-06.jpg": "whole",
      "flanerie-07.jpg": "whole",
      "flanerie-08.jpg": "whole",
      "flanerie-09.jpg": "whole",
      "flanerie-10.jpg": "whole",
      "flanerie-11.jpg": "whole",
      "flanerie-12.jpg": "whole",
    },
    images: [
      "flanerie-06.jpg", "flanerie-01.jpg", "flanerie-02.jpg", "flanerie-03.jpg", "flanerie-04.jpg",
      "flanerie-05.jpg", "flanerie-07.jpg", "flanerie-08.jpg", "flanerie-09.jpg", "flanerie-10.jpg",
      "flanerie-11.jpg", "flanerie-12.jpg",
    ],
  },
  {
    title: "Seven Sisters Cliffs",
    tag: "Taken on Sony Cybershot",
    category: "Photography",
    folder: "photography-seven-sisters",
    images: ["20251007-140406000-ios.jpg"],
    sections: [
      ["the coast", ["20251007-141413000-ios.jpg"]],
      ["the fields at dusk", ["20251007-163238000-ios.jpg", "20251007-163312000-ios.jpg", "20251007-163825000-ios.jpg", "20251007-164105000-ios.jpg", "20251007-164112000-ios.jpg"]],
    ],
  },
];

// Projects with `sections` list only their cover in `images`; the rest is filled in
// from the sections, in order, so the lightbox follows the page.
projects.forEach((p) => {
  if (p.sections) p.images = [p.images[0], ...p.sections.flatMap(([, files]) => files)];
});

// Each project's "color world" (gallery background, text color), pulled from its own palette.
// Projects not listed here fall back to the black & white base.
const colorWorlds = {
  "design-perspectives-britpop-jeans": ["#eff2f7", "#c4161c"],
  "olivia-dean-shirt": ["#f4efe6", "#2b2b2b"],
  "custom-denim": ["#dde5ee", "#2c4a6e"],
  "senior-shirt": ["#a3c1a3", "#1f3d27"],
  "custom-basketball": ["#f4e7da", "#a8481a"],
  "custom-totes": ["#f4eee2", "#4a6d8c"],
  "architecture-pavilion": ["#ece6da", "#6e5530"],
  "architecture-cube": ["#111111", "#d9c9a3"],
  "arcstart-basswood": ["#f1ede6", "#5a4a38"],
  "arcstart-3d-forms": ["#e9e5ee", "#6b3f8c"],
  "designing-interactive-experiences": ["#0b0b10", "#a58cff"],
  "graphics-volleyball": ["#c41414", "#ffffff"],
  "graphics-ukrainian-melodies": ["#f3ecd9", "#1f4e8c"],
  "graphics": ["#2d2a35", "#f2a679"],
  "tedx": ["#111111", "#e62b1e"],
  "photography-sports": ["#c41414", "#ffffff"],
  "making-things-flanerie": ["#eceee6", "#3d4a1f"],
  "photography-seven-sisters": ["#2b2b2b", "#f5d9b5"],
};

// Short write-up shown on each project's page. Separate paragraphs with a blank line ("\n\n").
const descriptions = {
  "design-perspectives-britpop-jeans":
    "Made for \"Design in London,\" an ungraded exhibition for my Design Perspectives lecture that highlighted material culture and curation. Alongside the piece, I wrote its museum label:\n\nEmerging from the 1990s Britpop and swagger of Cool Britannia, \"Britpop in the Streets\" reimagines the rebellious confidence of a generation through a contemporary lens. The distressed denim, patched with frayed motifs of the rival bands Oasis and Blur and a Union Jack, recalls the working-class pride and unfiltered attitude that defined the movement. The striped burgundy tie adds a note of rebellion against conformity, an echo of the sharp yet chaotic fashion contrasts of the time.\n\nBands like Oasis and Blur did not only define the sound of Britpop; they shaped its visual language. Oasis represented the \"northern grit\" of Manchester's working-class bravado, and Blur embodied \"southern cool,\" the sharp, art-school irony of London. That tension showed up in London's fashion scene as a mix of tailoring and streetwear, rebellion and reinvention. London in this period blurred the lines between music, art and style, turning youth culture into couture.\n\nChains of pearls and silver hardware carry the same spirit of experimentation and chaotic fashion. It stands as a wearable piece of London's creative energy, where music and design continue to collide and evolve.",
  "olivia-dean-shirt":
    "Hand-embroidered T-shirts made to wear to an Olivia Dean concert in New York. Each shirt carries a lyric stitched in my own handwriting, \"love's never wasted\" and \"when it's shared, mmm,\" so the two read as a pair.\n\nBefore starting the shirts, I taught myself to embroider on a practice hoop of a bookshelf. For the lettering, I used a shirt I found on Pinterest as a typeface reference, then wrote the lyrics out in my own hand, transferred them onto the shirts and embroidered them using a hoop, with \"Olivia Dean New York 2026\" stitched on the back.",
  "custom-denim":
    "A birthday present for a friend: a plain denim jacket, hand-painted to celebrate the University of Pennsylvania with the Quaker mascot, the Penn shield, a \"Quakers\" pennant and a \"University of Pennsylvania\" banner.\n\nThe idea started with a painted Minnesota jacket by @peachypaintshop that I found on Pinterest. I sketched my own Penn version, used an image generator to color in the sketch as a quick mockup, then drew the outline onto the jacket and painted it by hand with acrylics.",
  "senior-shirt":
    "A one-of-a-kind senior shirt. The lettering is cut from gingham and floral fabrics, appliquéd onto a white tee and finished with small embroidered flowers and details.\n\nEach letter was cut and placed by hand, so the shirt reads as playful and handmade rather than printed.",
  "custom-basketball":
    "A birthday present for a friend. He customized a basketball for me on my birthday, and that became my inspiration: for his birthday, I wanted to return the favor.\n\nI filled the ball with small elements about him: his name in bubble lettering, a drawing of him dribbling, the Brooklyn Bridge at night, the Wilson logo redrawn with a bunny and a panda, a \"timmy time\" logo and his college logo. I digitized my ideas first, then painted them by hand onto the ball, wrapping them around its panels so it reads from every angle.",
  "custom-totes":
    "A set of hand-drawn tote bags, each designed around a different college: Wheaton, Grove City and more. Working from reference images I found online, I drew every design by hand, matching each school's logo, mascot or colors.",
  "architecture-pavilion":
    "A pavilion study built around a single undulating roof. A thin white surface rises and falls over a basswood truss structure, creating sheltered pockets underneath.\n\nThe project moved from concept sketches to a physical model, then to an axonometric drawing and a render of the pavilion placed in a landscape.",
  "architecture-cube":
    "A cube project that introduces basic model-making techniques and the principles of tectonic and spatial composition through physical models and orthographic drawings. It exercised hand-drawing plans, sections and elevations, photo editing in the Adobe suite, and portfolio compilation.\n\nThe concept of this cube is centered on the verb \"framing.\" Framing is not only about creating boundaries, but also about highlighting, enclosing and guiding perception. This cube explores framing as both a structural and a conceptual tool, emphasizing how frames define a space while leaving room for interpretation.\n\nThe process began with the construction of a skeletal cube using thin wooden sticks, creating a transparent framework. This initial structure served as a pure exercise in defining the edges and boundaries of the 6\" x 6\" cube without closing them, allowing me to experiment with the interplay of multiple frames layered within one another.\n\nThe next stage involved selectively filling some of these frames with planes, creating different spaces within one another. The addition of surfaces turned the skeletal structure into multiple spatial divisions, bringing out the nuance in the word \"framing.\"",
  "arcstart-basswood":
    "Made during ArcStart 2024, a three-week pre-college architecture program at the University of Michigan, in a workshop led by Osama Sukkar. The focus was tectonic design and gestural designing and modeling: thinking through making, by building directly with the material.\n\nWorking only with basswood and tacky glue, I layered sticks and planes into a vertical composition, letting the structure develop piece by piece at the studio table.",
  "arcstart-3d-forms":
    "A project from ArcStart 2024 at the University of Michigan, where we learned to draw isometric views while also learning to create our own patterns in Illustrator. I developed one interlocking form and drew it from four viewpoints, northwest, southeast, southwest and northeast, each in its own color, alongside a palette of colors and patterns I designed.\n\nWe then had to choose one view and turn it into a room for \"something.\" Mine became a room for rock climbing. To bring it into three dimensions, I printed my patterns onto paper nets, folded them into the pieces of the form, and photographed the finished model in a lightbox with scale figures.",
  "designing-interactive-experiences":
    "CineSense is a concept developed in Designing Interactive Experiences: a wearable that uses haptics to help audiences \"feel every moment\" of a film, designed to make the cinema more accessible.\n\nThe process moved from a user journey map to sketches of possible haptic wearables (a blanket, a bracelet, a neck pillow, glasses), a storyboard of the cinema visit, wireframes for a companion app, and the final brand identity.",
  "graphics-volleyball":
    "Social media graphics for Northeastern Women's Volleyball, made as part of my role as team manager. The set includes player feature graphics and a \"This Is Husky Volley\" piece.\n\nEach graphic keeps the player as the focus while carrying a consistent Husky identity.",
  "graphics-ukrainian-melodies":
    "A poster series for Ukrainian Melodies, a music event. The posters pair traditional instruments, such as the violin, guitar and piano, with ornamental patterns and the blue and yellow of Ukraine.\n\nI explored several directions for the series before landing on the final poster.",
  "graphics":
    "A poster for Dawn of the Mourning Son, a short play about grief and healing. A lone silhouette set against a city skyline at dawn captures the play's quiet, reflective tone.",
  "handwritten-typography":
    "A custom typeface made from my own handwriting. I filled in Calligraphr character templates by hand, letter by letter, then scanned them to turn my handwriting into a working digital font.",
  "tedx":
    "As Events Officer for the TEDxNortheasternLDN Society, I coordinated logistics for the end-of-year TEDx event in London, including sourcing materials and managing the budget.\n\nI also delivered the event's 22 ft. sign within a 3-day deadline.",
  "photography-sports":
    "Photographs of Northeastern Women's Volleyball, taken as team manager. I shoot practices twice a week and games throughout the season, capturing the energy and the small moments of the sport.\n\nThese images also feed the team's Instagram, reels and stories.",
  "making-things-flanerie":
    "A photo essay for ARTF1110 Making Things, built around the idea of the flâneur: someone who wanders the city simply to observe it.\n\nI walked through Boston photographing everyday scenes, then layered black-and-white and color within single images to guide where the eye lands.",
  "photography-seven-sisters":
    "Photographs from a trip to the Seven Sisters cliffs on England's south coast, taken on a Sony Cybershot.\n\nThe older digital camera gives the images a soft, muted quality that suits the dusk light over the fields and coastline.",
};