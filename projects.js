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
    tag: "Designing Interactive Experiences · Haptic Wearable",
    category: "Graphic & Interaction",
    folder: "designing-interactive-experiences",
    fit: "natural", // show every photo uncropped at its own shape
    images: ["cinesense.jpg"],
    // Follows the order and words of the course portfolio (Subelements I, II and III).
    sections: [
      ["subelement I · focusex", [], "Accessibility case study: FocusEx\n\nAttention-deficit/hyperactivity disorder (ADHD) is one of the most commonly diagnosed neurodevelopmental conditions, characterized by persistent difficulties with inattention, hyperactivity and impulsivity (Moldavsky and Sayal, 2013). These symptoms directly affect reading quality, as individuals with ADHD often struggle to maintain focus on lengthy written content, particularly in digitally cluttered environments filled with advertisements, images and inconsistent typography. Despite growing awareness of the condition, misconceptions persist among professionals and the public, and the stigma surrounding ADHD continues to act as a barrier to support (Moldavsky and Sayal, 2013). FocusEx, a browser extension developed by designer Szabolcs Vatány as a master's thesis project at Moholy-Nagy University of Art and Design Budapest, responds to these challenges by reimagining how users interact with online text.\n\nWhen compared to the conventional, unmodified web browsing experience, the barriers facing users with ADHD become immediately apparent. A standard article-heavy webpage such as Wikipedia presents dense, unbroken text surrounded by hyperlinks, sidebars and constant visual noise. For a user with ADHD, this environment can trigger sensory overload, making sustained reading and comprehension extremely difficult. There is no built-in mechanism to reduce distractions or adapt the reading experience to individual needs.\n\nFocusEx addresses these barriers through several carefully designed features. Its \"Deep Reading\" mode strips the webpage of all extraneous content and presents the text sentence by sentence against a clean background, allowing the user to navigate at their own pace using simple arrow controls. The \"Skimming\" mode breaks text into manageable sections, enlarging each one individually so the reader can process parts before engaging with the whole. The extension also includes a custom-designed typeface, Focus Sans, with wider letter-spacing and proportions optimized for legibility, as well as a \"Clean\" function that removes advertisements and visual clutter, and a \"killCAPS\" tool that converts excessive capitalization into standard sentence case.\n\nWhat I think makes FocusEx particularly noteworthy from a design perspective is its embodiment of the curb-cut effect, the phenomenon whereby features originally designed for a specific marginalized group end up benefiting a far wider population (Blackwell, 2017). While FocusEx was built primarily for users with ADHD, its tools are equally valuable to any reader who finds the modern web visually overwhelming or difficult to navigate. In this way, FocusEx demonstrates that accessible design is not a niche concern but a pathway to better experiences for all users."],
      ["\u201cconventional\u201d experience", ["focusex-conventional.jpg"], "A student with ADHD does research without FocusEx."],
      ["accessible case study experience", ["focusex-accessible.jpg"], "A student with ADHD does research with FocusEx."],
      ["subelement II · proto persona", [], "Kieran, 36, data analyst (from the brief)\n\nKieran is profoundly deaf and uses British Sign Language (BSL) as his first language. He lip-reads to some extent but finds it tiring and unreliable, especially in poor lighting or with people who don't face him directly. He wears hearing aids that provide some awareness of environmental sounds but don't enable him to understand speech. Kieran lives with his hearing partner, who is fluent in BSL, and he advocates actively for deaf access in his workplace and community.\n\nInterests: running, football, reading, film, travel\n\nRecreational barriers:\n• Participating in group hobbies or sports becomes isolating when communication happens through spoken word without visual alternatives or BSL interpretation.\n• Going to the cinema is often disappointing when subtitled screenings are limited to specific times and days, restricting spontaneous entertainment choices. Subtitled screenings also limit the immersive experience that non-DHH peers enjoy.\n• Traveling to new places becomes stressful when tourist information, guided tours and staff interactions rely solely on spoken communication without written or visual support."],
      ["user journey", ["general-user-journey-map-1.jpg"]],
      ["design proposal I · digital", ["companion.jpg"], "The digital design proposes a companion app that enables Deaf users to easily discover and engage with accessible film experiences, both in cinemas and at home. The platform allows users to find subtitled and sensory-enhanced screenings, supporting more spontaneous and flexible viewing rather than relying on limited scheduled accessibility options. In addition to discovery, the app connects to a wearable haptic device (the physical proposal) via Bluetooth, allowing users to customize their experience through adjustable vibration intensity and sensory settings. These controls let users tailor feedback to their comfort level, keeping the experience both immersive and non-intrusive.\n\nThe interface prioritizes clarity and visual navigation, reducing reliance on audio and supporting intuitive interaction. By combining accessibility information with personalization tools, the app extends beyond traditional captioning, offering a more inclusive and adaptable way for Deaf users to access and experience film."],
      ["design proposal II · physical", ["bsl-cinema.jpg"], "This proposal presents a combination of wearable systems using haptics and temperature (glasses, an ear-based device and a neck-worn band) designed to translate cinematic sound into a layered, multi-sensory experience for Deaf and Hard of Hearing (DHH) audiences. While haptic cinema is not a new concept, existing solutions often limit practicality or immersion. This design aims to create a more realistic, wearable and socially integrated system by distributing feedback across the head and neck.\n\nEach component delivers a distinct type of sensory input: the glasses provide light vibrations across the temples for directional cues and visual emphasis; the ear device offers more precise, localized haptics for dialogue and subtle sound details; and the neck band delivers deeper, ambient vibrations to represent bass, tension and environmental atmosphere. Together, they create a more holistic interpretation of a film's soundscape."],
      ["subelement III · prototype", [], "This project began by exploring physical haptic systems to enhance cinematic experiences for Deaf and Hard of Hearing (DHH) users. Initial concepts focused on creating a multi-sensory (haptics and temperature) wearable for cinema environments (seen in Subelement II), aiming to maximize immersion through distributed feedback across the body. However, through early development, it became clear that there is a threshold where increased innovation can reduce usability.\n\nThis led to a shift toward a more practical and simplified approach. Inspired by the familiar form of a wearable neck fan, the concept evolved into a haptic neck device designed to sit comfortably around the user while delivering tactile feedback. Early iterations also explored integrating temperature-based feedback, but this direction was reconsidered due to limitations in relevance and safety.\n\nFurther exploration involved researching alternative haptic formats, including wearable and non-wearable systems. While these offered different advantages, they often lacked the balance of immersion, comfort and practicality I envisioned for this project.\n\nThe final direction prioritizes a single, centralized wearable that aligns with existing behaviors and environments, particularly home viewing. This approach reframes haptic technology as a realistic and accessible enhancement to film, rather than an experimental or overly complex solution."],
      ["paper prototype", ["img-0312.jpg", "paper-1.jpg", "paper-2.jpg", "paper-3.jpg", "paper-4.jpg"], "This paper prototype was an early exploration of the haptic neck wearable, focusing on its form, placement and interaction. The model was created to quickly test how a device could sit around the neck, where haptic points might be positioned, and how users might physically engage with controls. At this stage, the concept also included both haptic feedback and temperature-based elements to enhance immersion within cinematic experiences.\n\nFeedback from testing highlighted several important considerations. Users noted that the device could be distracting in a cinema environment, particularly if sensations were too noticeable. The inclusion of temperature was also questioned, as it does not consistently align with most film experiences and could present safety concerns. Additionally, it was suggested that the concept may be more appropriate for home viewing, where users have greater control and comfort."],
      ["research · haptics", ["haptic.jpg"], "Further feedback encouraged exploration of alternative haptic formats, such as blankets, wearables and accessories. While these options offered potential, they revealed limitations in practicality or immersion, reinforcing the decision to refine and focus on the neck as the most effective and balanced placement for haptic feedback."],
      ["iteration I · ring & bracelet", ["img-0328.jpg", "img-0339.jpg"]],
      ["iteration II · neck haptic", ["img-0336.jpg", "img-0337.jpg", "img-0338.jpg", "img-0340.jpg", "img-0341.jpg"]],
      ["the cinesense experience", ["img-1659.jpg"], "Kieran uses CineSense, with its potential digital counterpart."],
      ["final iteration", ["img-0345.jpg", "img-0346.jpg", "img-0342.jpg", "img-0344.jpg", "img-0357.mp4", "img-0354.mp4", "img-0355.mp4"], "This final iteration prioritizes practicality over visual complexity. While the form may appear minimal or \"basic,\" this is intentional. Many existing haptic systems focus on function rather than aesthetics, and this design follows the same principle, making the device realistic, wearable and suitable for everyday use rather than overly conceptual.\n\nThe structure has been thickened to increase surface contact across the neck, allowing haptic feedback to be distributed more effectively and perceived more clearly. The curved form has also been refined to follow the natural contour of the shoulders, improving stability and long-term comfort. Earlier prototypes explored a thinner design with an internal charging port, but this limited usability, as the device could not be worn while charging. In response, the charging port has been moved to the exterior, enabling continuous use and a more practical experience.\n\nThe device would be constructed from a durable polymer outer shell with a soft-touch finish, paired with an inner cushioned layer inspired by ergonomic seating materials. This combination balances structural integrity with comfort, reinforcing the product's focus on function, accessibility and real-world application."],
      ["iteration II and final", ["img-0350.jpg"]],
      ["feel every moment", ["cinesense-film.mp4"]],
      ["bibliography", [], "Blackwell, A. G. (2017). The curb-cut effect. Stanford Social Innovation Review, 15(1), 28–33.\n\nDim, N. K., & Ren, X. (2017). Investigation of suitable body parts for wearable vibration feedback in walking navigation. International Journal of Human-Computer Studies, 97, 34–44. https://doi.org/10.1016/j.ijhcs.2016.08.002\n\nLemmens, P., Crompvoets, F., Brokken, D., van den Eerenbeemd, J., & de Vries, G.-J. (2009). A body-conforming tactile jacket to enrich movie viewing. In Proceedings of the Third Joint EuroHaptics Conference and Symposium on Haptic Interfaces for Virtual Environment and Teleoperator Systems (World Haptics 2009). IEEE. https://doi.org/10.1109/WHC.2009.4810832\n\nMoldavsky, M., & Sayal, K. (2013). Knowledge and attitudes about attention-deficit/hyperactivity disorder (ADHD) and its treatment. Current Psychiatry Reports, 15, Article 377. https://doi.org/10.1007/s11920-013-0377-0", "bibliography"],
    ],
    captions: {
      "img-0350.jpg": "iteration II (left) beside the final iteration (right)",
      "cinesense-film.mp4": "the CineSense film (opens with sound)",
    },
    crop: {
      "focusex-conventional.jpg": "whole",
      "focusex-accessible.jpg": "whole",
      "general-user-journey-map-1.jpg": "whole",
      "companion.jpg": "whole",
      "bsl-cinema.jpg": "whole",
      "haptic.jpg": "whole",
      "img-1659.jpg": "whole",
      "img-0350.jpg": "whole",
      "cinesense-film.mp4": "whole",
    },
  },
  {
    title: "EcoEats",
    tag: "Designing Interactive Experiences · Service Design",
    category: "Graphic & Interaction",
    folder: "ecoeats",
    fit: "natural", // show every image uncropped at its own shape
    images: ["cover.jpg"],
    // Follows the order and words of the course portfolio (Int. Ex. Portfolio, AE1).
    sections: [
      ["subelement 1 · case study", [], "My research began with an investigation into food and waste systems in London's public spaces, focusing specifically on the environmental impact of street food vendors. Coming from New York City and recently living in London and frequently visiting outdoor markets such as Brick Lane, I noticed how vibrant and diverse food cultures often come with an equally visible problem: excessive waste. After every weekend market, bins overflow with single-use containers, plastic cutlery and half-eaten food. This observation became the starting point for understanding how public eating habits and vendor systems contribute to food and packaging waste, and how design interventions could make sustainable behavior more intuitive and accessible.\n\nTo explore how real businesses are addressing similar issues, I was introduced by a friend to the Monmouth Coffee reusable cup scheme, a London-based initiative that completely removed disposable takeaway cups from their shops. Instead, they offer a reusable loan-cup system with a refundable deposit, supported by clear communication, easy return processes and an emphasis on long-term sustainability. What interested me was not just the environmental benefit, preventing hundreds of thousands of single-use cups from entering landfill each year, but how the system reshaped user behavior without feeling restrictive. It reframed sustainability as a normal, frictionless part of daily life. This idea became central to the direction of my project.\n\nInspired by Monmouth, I decided to broaden the concept from a café setting to a sustainable street-food vendor tent. Markets involve more complex behaviors than coffee shops: people eat while walking, carry food around crowded spaces and dispose of waste unpredictably. Many vendors have limited space, inconsistent packaging practices and little incentive to offer sustainable alternatives. My tent concept responds to this by providing a unified system in which all packaging, whether reusable, compostable or deposit-based, is integrated into the tent design itself. Customers can choose from several sustainable options, all clearly explained through signage and intuitive layouts. This system not only reduces waste but creates a cohesive experience that encourages small, consistent changes in behavior, similar to Monmouth's strategy but adapted for a more chaotic and mobile environment.\n\nA key moment for my design thinking came from the Design and Disability exhibition at the V&A, which reframed how I consider accessibility within sustainability systems. The exhibition emphasized that good design does not just reduce environmental impact; it must also reduce cognitive, physical and emotional barriers. This was directly relevant to my project. Many people want to act sustainably but find systems confusing, inaccessible or physically demanding. For example, in the exhibition, objects were designed to make everyday tasks easier for people with mobility challenges. This made me reconsider customers like pregnant individuals, elderly people or those carrying heavy bags in crowded markets. If sustainable packaging systems are hard to understand or inconvenient to use, many will simply revert to disposables.\n\nThis insight pushed me to focus on making my system intuitive and inclusive: clear bin design, minimal decision-making, lightweight packaging options, and a layout that supports users with different physical and cognitive needs. Sustainability should not be a burden; it should fit seamlessly into daily life."],
      ["user journey · customer (me)", ["journey-customer.jpg"]],
      ["proto persona", ["persona-priya.jpg"]],
      ["user journey · priya", ["journey-priya.jpg"]],
      ["swo analysis", ["swo.jpg"]],
      ["research", [], "V&A Design & Disability Exhibit.\n\nMonmouth Coffee Company, n.d. Reusable cup scheme. [online] Available at: https://www.monmouthcoffee.co.uk/reusable-cup-scheme [Accessed 13 Nov. 2025].", "bibliography"],
      ["subelement 2 · experience design", [], "Urban food markets generate large volumes of single-use packaging waste, creating environmental harm, visual clutter and operational challenges. Consumers want to act sustainably, but face barriers such as a lack of accessible alternatives, confusion about what is genuinely eco-friendly, and inconsistent systems across vendors. There is a need for a simple, universal and user-friendly solution that reduces waste while supporting both customers and vendors.\n\nMy design is a centralized reusable container deposit tent that serves the entire food vendor market. Instead of creating a new sustainable vendor, I shifted toward designing a market-wide infrastructure inspired by Monmouth Coffee's reusable coffee cup scheme. Because if we can do it with coffee, we can do it with food too. By offering a universal reusable container system, customers can pay a small deposit to receive a clean container, use it at any food stall in the market, and return it after eating for a refund or exchange. This eliminates the need for single-use containers and creates an easy, circular model that benefits everyone.\n\nInitially, my project began by exploring sustainable packaging solutions and analyzing how food vendors contribute to waste. Visiting markets like Brick Lane revealed a clear problem: overflowing bins, mixed waste, and a lack of consistent recycling or reuse options. I initially designed an entire eco-friendly food tent, but through research, I realized that this approach helped only one vendor rather than addressing the systemic issue.\n\nRevisiting my findings, I pivoted toward a service-based solution that supports the entire ecosystem. The Monmouth Coffee scheme showed me the power of simple deposit-return systems, while the V&A's Design and Disability exhibition highlighted the importance of clarity, accessibility and reducing cognitive load. These influences shaped the user-centered features of my service: intuitive signage, easy container return, inclusive usability, and a clean, welcoming tent environment."],
      ["user journey · reusable container deposit system", ["journey-general.jpg"]],
      ["iteration #1", ["iteration-1.jpg"], "Low fidelity storyboard of wasteful food packaging and overflowing waste bins."],
      ["iteration #2", ["iteration-2.jpg"], "\u201cEcoEats\u201d: mid fidelity storyboard applying reusable and paper containers, with accessible seating nearby."],
      ["paper prototype", ["paper-prototype-plan.jpg", "paper-prototype-film.mp4"]],
      ["final", ["final-storyboard.jpg"]],
    ],
    captions: {
      "paper-prototype-plan.jpg": "planning the paper prototype film",
      "paper-prototype-film.mp4": "the paper prototype film (opens with sound)",
    },
  },
  {
    title: "Dawn of the Mourning Son",
    tag: "Graphic Design · Theater Poster",
    category: "Graphic & Interaction",
    folder: "graphics",
    details: [
      ["for", "Christopher D. Suh, writer and producer"],
      ["tools", "Adobe Illustrator"],
    ],
    images: ["dawn-of-the-mourning-son.jpg"],
    video: { youtube: "0DRDq0TRLhM", embed: false, label: "watch the play", caption: "Dawn of the Mourning Son, full performance" },
    sections: [
      ["about the title", [], "“I chose the title Dawn of the Mourning Son because it captured multiple dimensions that my play deals with. Beyond being a phonetic pun, the ‘Dawn’ implies the rise of a new day, inspiring hope for the future. This is contrasted with ‘mourning,’ which describes the ‘night’ the main character has passed through in grief. Finally, the choice of the word ‘son’ wrestles with the main character’s idea of a father, how his late uncle replaced his absent father, and what it meant to lose him.”\n\n— Christopher D. Suh, playwright"],
      ["looking back", [], "This was one of my first times ever using Adobe Illustrator, and one of my first bigger design projects that required real critical thinking. Looking back, the visual hierarchy could be more balanced, and I could have experimented with a few more typefaces, but I think it turned out really nicely for one of my first times in Illustrator."],
    ],
  },
  {
    title: "TEDxNortheasternLDN",
    tag: "Event Design · 22 ft. Sign",
    category: "Graphic & Interaction",
    folder: "tedx",
    fit: "natural", // show every photo and timelapse uncropped
    images: ["the-sign.jpg"],
    sections: [
      ["making the sign", ["timelapse-cutting.mp4", "spray-painting.jpg", "timelapse-bracing.mp4", "timelapse-standing.mp4"]],
      ["the event", ["copy-of-img-5242.jpg", "copy-of-img-5299.jpg", "the-event.jpg"]],
    ],
    captions: {
      "timelapse-cutting.mp4": "cutting out the letters",
      "spray-painting.jpg": "spray-painting the red TEDx letters",
      "timelapse-bracing.mp4": "adding stands so each letter stands on its own",
      "timelapse-standing.mp4": "standing the sign up in the event space",
    },
  },
  {
    title: "The Basics of Volley",
    tag: "Northeastern Women’s Volleyball · Team Manager",
    category: "Photography",
    folder: "photography-sports",
    crop: {
      "callaway-thirdsgraphicjim13746.jpg": "whole",
      "daniels-thirdsgraphicjim14619.jpg": "whole",
      "king-thirdjim14226.jpg": "whole",
      "meirelles-thirdsgraphicjim14204.jpg": "whole",
      "foggy-windowgraphic.jpg": "whole",
    },
    images: ["0p1a4392.jpg"],
    sections: [
      ["practice", ["0p1a4399.jpg", "0p1a4414.jpg", "0p1a4435.jpg", "0p1a4551.jpg", "0p1a4563.jpg"]],
      ["game day", ["20260926-171918000-ios.jpg", "20260926-175621000-ios.jpg", "20260926-180555000-ios.jpg", "20260926-181336000-ios.jpg", "20260926-185303000-ios.jpg", "20260926-193210000-ios.jpg", "20260926-223622000-ios.jpg", "20260926-223640000-ios.jpg"]],
      ["rule of thirds", ["callaway-thirdsgraphicjim13746.jpg", "daniels-thirdsgraphicjim14619.jpg", "king-thirdjim14226.jpg", "meirelles-thirdsgraphicjim14204.jpg"], "A series of player portraits for the team's social media, each composed on a rule-of-thirds grid so the athlete and the type share one structure."],
      ["this is husky volley", ["foggy-windowgraphic.jpg"]],
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
  "ecoeats": ["#232323", "#b9d98b"],
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
    "A design process portfolio for Designing Interactive Experiences, in three subelements. It begins with an accessibility case study of FocusEx, a reading tool for people with ADHD, then moves into design ideation for Deaf and Hard of Hearing film audiences, and ends with CineSense, a haptic wearable prototype that lets them feel every moment of a film.",
  "ecoeats":
    "A service design project for Designing Interactive Experiences, in two subelements. It starts with a case study of food and packaging waste at London's street food markets, informed by Monmouth Coffee's reusable cup scheme and the V&A's Design and Disability exhibition, and becomes EcoEats: a market-wide reusable container deposit tent, developed through storyboards and a paper prototype film.",
  "graphics":
    "A poster for Dawn of the Mourning Son, a short play about grief, suicide and healing, written and produced by my friend Chris as his junior project. The play deals with teen depression, loss and suicide, and he asked me to design its poster.\n\nFour objects carry the play’s themes, so I built them into the title lettering itself: a wine glass for alcohol (pleasure), a book for philosophy, a rosary for spirituality and religion, and a noose, the symbol of suicide and a big part of the play’s ending.\n\nBelow the title, the son looks off into the dawn over the city, with the faded figure of the father he lost behind him. I think the colors work really well together. It’s a less than ordinary dawn: not a bright, happy sky of red, yellow and pink, but one with some darkness in it, which sets the tone for the play’s subject.",
  "tedx":
    "As Events Officer for the TEDxNortheasternLDN Society, I coordinated logistics for the end-of-year TEDx event in London, including sourcing materials and managing the budget.\n\nI also delivered the event's 22 ft. sign within a 3-day deadline. Working with a small team, we cut each letter out by hand, spray-painted the red TEDx letters, added stands so every letter could stand on its own, and set the full sign up across the front of the event space.",
  "photography-sports":
    "As team manager for Northeastern Women's Volleyball, I document the team and help tell its story. I photograph practices twice a week and games throughout the season, capturing the energy and the small moments of the sport.\n\nThe photos feed the team's Instagram, alongside the reels, stories and graphics I make for it, like the rule-of-thirds player series below.",
  "making-things-flanerie":
    "A photo essay for ARTF1110 Making Things, built around the idea of the flâneur: someone who wanders the city simply to observe it.\n\nI walked through Boston photographing everyday scenes, then layered black-and-white and color within single images to guide where the eye lands.",
  "photography-seven-sisters":
    "Photographs from a trip to the Seven Sisters cliffs on England's south coast, taken on a Sony Cybershot.\n\nThe older digital camera gives the images a soft, muted quality that suits the dusk light over the fields and coastline.",
};