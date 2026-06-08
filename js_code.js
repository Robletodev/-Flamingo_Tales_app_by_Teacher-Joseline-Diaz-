
// ─── DATA ───────────────────────────────────────────────
const BOOKS = [
  // ADVENTURE
  { id:1, title:"The Lost Compass", category:"adventure", emoji:"🧭", color:"#FF6B6B", bg:"rgba(255,107,107,0.2)", age:"6-9", rating:4.8, isNew:true, isFeatured:true,
    story:`<p>Deep in the Enchanted Forest, a young girl named Lily found a mysterious golden compass. Unlike ordinary compasses, this one didn't point North — it pointed to <em>magic</em>.</p><p>"Where should we go?" asked her best friend Max, his eyes wide with wonder. The needle spun wildly and then stopped, pointing deep into the darkest part of the forest.</p><p>"Are you sure about this?" Max whispered nervously. Lily grinned and took his hand. "That's exactly why we should go!"</p><p>They walked for hours, following the compass through whispering trees and sparkling streams. Suddenly, they stumbled upon a meadow full of tiny glowing creatures — they were fairies! Real, actual fairies!</p><p>"You found us!" cried the tiniest fairy, no bigger than Lily's thumb. "We've been waiting for someone brave enough to follow the magic compass. Our queen needs your help!"</p><p>Lily and Max looked at each other. Whatever lay ahead, they were ready. Together, they stepped into the greatest adventure of their lives.</p>`,
    description:"A brave girl discovers a magical compass and embarks on an enchanted forest adventure.", duration:"8 min" },
  { id:2, title:"Ocean Explorer", category:"adventure", emoji:"🐠", color:"#60A5FA", bg:"rgba(96,165,250,0.2)", age:"7-10", rating:4.6, isNew:true,
    story:`<p>Tommy had always dreamed of exploring the deep ocean. When his scientist grandmother gave him a miniature submarine for his birthday, he never expected it could actually shrink — and take him with it!</p><p>Suddenly, Tommy was the size of a fish, steering through a world of coral castles and seaweed forests. A friendly dolphin named Delphi appeared beside him.</p><p>"Welcome to the real ocean!" Delphi clicked and whistled. "Most humans never get to see what you're about to see."</p><p>They dove deeper and deeper, past glowing jellyfish and ancient shipwrecks covered in starfish. Tommy discovered that the ocean wasn't empty — it was the busiest, most colorful city he'd ever seen.</p><p>By the time he surfaced, Tommy had filled three notebooks with drawings and notes. He was going to be an ocean scientist, just like his grandmother. The adventure had only just begun.</p>`,
    description:"Tommy shrinks to fish-size and discovers the incredible world beneath the waves.", duration:"7 min" },
  { id:3, title:"Mountain Climbers", category:"adventure", emoji:"⛰️", color:"#4ADE80", bg:"rgba(74,222,128,0.2)", age:"8-11", rating:4.5,
    story:`<p>Sofia always looked up at Mt. Sunrise and wondered what was at the top. Her grandfather, who had climbed every mountain in the country, said the view from up there could change your life.</p><p>One summer morning, she decided to find out herself. She packed her bag, put on her hiking boots, and began to climb. The mountain was steeper than she expected, and by noon her legs ached.</p><p>Then she met Oscar, a brown bear cub who seemed to be hiking too. "Are you lost?" she asked. Oscar shook his head and pointed upward with one fuzzy paw. So they climbed together.</p><p>When they finally reached the peak, Sofia gasped. She could see everything — her village, the river that curved like a silver ribbon, and beyond that, more mountains, each one an invitation to a new adventure.</p><p>Her grandfather was right. The view didn't just change how she saw the world. It changed how she saw herself.</p>`,
    description:"Sofia climbs Mt. Sunrise with a surprising furry companion and discovers her own strength.", duration:"9 min" },

  // MYSTERY
  { id:4, title:"The Missing Trophy", category:"mystery", emoji:"🏆", color:"#FFE66D", bg:"rgba(255,230,109,0.2)", age:"7-10", rating:4.7, isFeatured:true,
    story:`<p>The golden soccer trophy had vanished from the school display case overnight, and detective twins Petra and Pablo were on the case!</p><p>"It had to be someone with a key," said Petra, examining the lock with her magnifying glass. "No scratches. Professional." Pablo scribbled notes in his little red book.</p><p>They interviewed everyone — the janitor Mr. Grumbles, the suspicious new student Charlie, and even cheerful Coach Martinez. Everyone had an alibi. Everyone except one person...</p><p>The clue was a single purple shoelace caught in the cabinet door. Petra's eyes went wide. "The drama club!" she gasped. They raced to the auditorium and found the trophy — being used as a prop in the school play! The drama teacher had borrowed it without asking.</p><p>"Mystery solved in three hours," Pablo grinned, tying a knot in his notebook. "A new record!"</p>`,
    description:"Detective twins Petra and Pablo investigate a mysterious missing trophy at school.", duration:"10 min" },
  { id:5, title:"Ghost of Room 7", category:"mystery", emoji:"👻", color:"#A78BFA", bg:"rgba(167,139,250,0.2)", age:"8-12", rating:4.4,
    story:`<p>Every student in Jefferson Elementary knew that Room 7 was haunted. Lights flickered, chalk moved on its own, and sometimes you could hear singing when nobody was there.</p><p>Eleven-year-old Marcus wasn't scared of ghosts — he was curious about them. So one Friday afternoon, he stayed behind in Room 7 after everyone left.</p><p>As the sun set and shadows grew long, the singing began. It was beautiful — a sad, sweet melody that seemed to come from inside the walls. Marcus pressed his ear against the chalkboard and heard something tap back.</p><p>He looked closely at the wall and noticed a small door, painted to match the chalkboard. Behind it was a tiny room — a music practice space from 1952, sealed up and forgotten. Inside, an old music box played on and on, patient and lonely.</p><p>Marcus brought the music teacher. Together, they played the music box for the whole school. Room 7 was haunted by music, and music deserves to be heard.</p>`,
    description:"Brave Marcus discovers the true secret of his school's haunted classroom.", duration:"11 min" },

  // SCI-FI
  { id:6, title:"Robot's First Day", category:"sci-fi", emoji:"🤖", color:"#4ECDC4", bg:"rgba(78,205,196,0.2)", age:"5-8", rating:4.9, isNew:true, isFeatured:true,
    story:`<p>ZARA-7 had been assembled at 3:47 AM on a Tuesday, and by 8:00 AM she was expected to start school. Nobody told her robots could feel nervous, but here she was, absolutely terrified.</p><p>"You'll be fine," said her inventor, Dr. Bloom, adjusting ZARA's antenna bow. "Just be yourself." This advice was confusing, since ZARA wasn't sure what 'herself' was yet.</p><p>At school, the other kids stared. ZARA's face screen displayed a nervous yellow emoji. Then a girl named Priya sat beside her. "I like your bow," Priya said simply. ZARA's screen turned pink.</p><p>By lunchtime, ZARA had learned that humans were complicated and wonderful. She helped Maya with math, made Carlos laugh with a terrible robot joke, and discovered that she LOVED art class.</p><p>Walking home, ZARA updated her core personality file. Under 'Things I Am,' she added: curious, helpful, friend. That seemed like a good start.</p>`,
    description:"ZARA-7 is a brand-new robot navigating her very first day at a human school.", duration:"8 min" },
  { id:7, title:"Star Mail", category:"sci-fi", emoji:"🌟", color:"#FB923C", bg:"rgba(251,146,60,0.2)", age:"7-11", rating:4.3,
    story:`<p>Every Monday, Kiko received a letter — but not from Earth. The letters came from a planet called Aura, written by a girl named Stellara who had found Kiko's message in a bottle (floating through space).</p><p>"Here on Aura," Stellara wrote, "our sky is green and our oceans are purple. We have three moons named Pip, Pop, and Pup. What is Earth like?"</p><p>Kiko wrote back describing the blue sky, one moon, and pizza (Stellara was fascinated by pizza). Their letters crossed galaxies in the blink of an eye, carried by tiny star-shaped drones.</p><p>After a year of letters, Stellara sent one final message: "I'm coming to visit. I'll arrive on your beach next Saturday at noon. Please have pizza ready."</p><p>Kiko packed a picnic basket and went to wait. The greatest penpal visit in history was about to begin.</p>`,
    description:"Kiko exchanges letters with a girl from another planet — and then she comes to visit!", duration:"9 min" },

  // FRIENDSHIP
  { id:8, title:"The Invisible Friend", category:"friendship", emoji:"🌸", color:"#F472B6", bg:"rgba(244,114,182,0.2)", age:"5-7", rating:4.8, isNew:true,
    story:`<p>Everyone thought Mia was talking to herself. But Mia knew better — she was talking to Blossom, her best friend who happened to be invisible.</p><p>Blossom loved strawberry ice cream, hated thunderstorms, and told the funniest jokes. The problem was, nobody else could hear them. "Why don't you want other friends?" Blossom asked one day. Mia shrugged. "Other friends don't understand me like you do."</p><p>Then one rainy afternoon, new student Jonah sat next to Mia. He was talking quietly to something only he could see — his invisible dragon, Ember.</p><p>"Ember thinks Blossom sounds nice," Jonah whispered. Mia's eyes went wide. "Blossom says the same about Ember."</p><p>By the end of the day, Mia and Jonah were best friends, their invisible companions the secret handshake of a friendship built to last.</p>`,
    description:"Mia discovers that her invisible friend can help her make a very real new friend.", duration:"6 min" },
  { id:9, title:"Different but Friends", category:"friendship", emoji:"🦋", color:"#A78BFA", bg:"rgba(167,139,250,0.2)", age:"6-9", rating:4.6,
    story:`<p>Theo was loud, fast, and never stopped moving. Emma was quiet, slow, and loved to sit still for hours watching butterflies. Nobody expected them to become best friends.</p><p>It happened on the first day of summer camp. Every other child had a partner for the nature walk. Theo and Emma were left with each other, both slightly disappointed.</p><p>"I know where all the butterflies are," Emma said quietly. Theo's ears perked up — butterflies sounded cool, actually. Emma led him to a secret meadow behind the dining hall, and Theo was amazed.</p><p>In return, Theo taught Emma the most efficient way to catch fireflies, and how to jump off the big rock into the pond without being scared.</p><p>By summer's end, Emma had become a bit braver. Theo had learned to be still for just a moment. And both of them had learned the best lesson: different people make the best friends.</p>`,
    description:"Loud Theo and quiet Emma discover that opposites don't just attract — they complete each other.", duration:"8 min" },

  // COOKING
  { id:10, title:"The Magic Kitchen", category:"cooking", emoji:"🍰", color:"#FB923C", bg:"rgba(251,146,60,0.2)", age:"6-10", rating:4.7, isFeatured:true,
    story:`<p>Grandma Rosa's kitchen had a secret: the recipes in her old cookbook were magic. Not in a fizzing-and-sparkling way — in a this-cookie-will-fix-a-broken-heart way.</p><p>Nine-year-old Lucia watched carefully as her grandmother made sad-day soup for a neighbor, birthday cookies for a grumpy uncle, and brave-heart bread for her before a big test.</p><p>"How do you know which recipe to make?" Lucia asked. Grandma Rosa smiled and tapped her chest. "I listen to what my heart says. Then I listen to what their heart needs. Then I cook."</p><p>When Grandma got the flu, Lucia was the only one home. She opened the old cookbook, closed her eyes, and listened. Then she made honey-and-ginger get-well tea, following the recipe slowly and carefully.</p><p>When Grandma sipped it, her eyes filled with tears. "It tastes exactly right," she said. "You have the gift, little one."</p>`,
    description:"Lucia learns that Grandma Rosa's kitchen holds recipes for more than just food.", duration:"10 min" },
  { id:11, title:"Pizza Planet", category:"cooking", emoji:"🍕", color:"#4ADE80", bg:"rgba(74,222,128,0.2)", age:"5-8", rating:4.4,
    story:`<p>On Planet Margherita, everything was made of food. The mountains were mozzarella, the rivers ran with tomato sauce, and it rained basil every Thursday afternoon.</p><p>Young chef Peppo wanted to make the most amazing pizza the planet had ever seen — but every ingredient he tried was too normal. Cheese? Too cheesy. Sauce? Too saucy.</p><p>Then his little sister Gina suggested something silly: "What about the rainbow mushrooms from the Fairy Meadow?" Everyone said they were impossible to cook with. Peppo decided to try anyway.</p><p>When his pizza came out of the oven, it glowed seven colors and smelled like every wonderful thing at once. The pizza was so amazing that tears of joy ran down the faces of everyone who ate it.</p><p>"How did you do it?" asked the pizza judge. Peppo grinned at Gina. "I listened to someone who wasn't afraid of impossible ideas."</p>`,
    description:"Young chef Peppo creates a legendary pizza on a planet made entirely of food.", duration:"7 min" },

  // REFLECTION
  { id:12, title:"Why is the Sky Blue?", category:"reflection", emoji:"🌤️", color:"#60A5FA", bg:"rgba(96,165,250,0.2)", age:"4-7", rating:4.9, isNew:true,
    story:`<p>Every day on the way to school, little Noah asked his mother one important question. Today it was: "Mama, why is the sky blue?"</p><p>His mother — a scientist — could have explained light and wavelengths and scattering. Instead she said: "What do you think?"</p><p>Noah thought for a long time. "Maybe," he said slowly, "the sky is blue because it's sad that we all live down here and not up there with the clouds."</p><p>His mother stopped walking. She knelt down and looked at him seriously. "I'm a scientist who knows exactly why the sky is blue. But I've never thought of it that way before."</p><p>That day, Noah's mother went to work and wrote a new kind of paper — one that began: "A child once taught me that there are scientific answers, and then there are human answers, and both can be true at once."</p>`,
    description:"Noah's simple question about the sky teaches even his scientist mother something new.", duration:"5 min" },
  { id:13, title:"The Kindness Jar", category:"reflection", emoji:"🫙", color:"#4ADE80", bg:"rgba(74,222,128,0.2)", age:"6-9", rating:4.5,
    story:`<p>Miss Patel gave every student in 3rd grade an empty jar. "Whenever you do something kind," she said, "write it on a slip of paper and put it in your jar. At the end of the year, we'll see what happened."</p><p>At first, Oliver thought it was silly. What counted as kindness? Holding a door? Sharing a crayon?</p><p>But he put in a note: "Helped Sam pick up his spilled lunch." Then another: "Didn't laugh when Maya tripped." Then: "Said sorry first, even when it wasn't my fault."</p><p>By winter, his jar was half full. Something strange happened too — he started looking for opportunities to be kind, the way you look for four-leaf clovers once you decide to search for them.</p><p>At the end of the year, Miss Patel asked the class to read their notes aloud. The classroom overflowed with tiny, unnoticed moments of goodness. Oliver understood then that kindness, like a jar, can hold far more than it appears.</p>`,
    description:"Oliver discovers that searching for kindness teaches you to create it everywhere.", duration:"9 min" },

  // MATH
  { id:14, title:"The Number Kingdom", category:"math", emoji:"🔢", color:"#FFE66D", bg:"rgba(255,230,109,0.2)", age:"6-9", rating:4.7,
    story:`<p>In the Kingdom of Numerica, every citizen was a number. King 10 ruled wisely from his castle, helped by his advisors — wise old Prime, tricky Fraction, and cheerful Zero, who everyone underestimated.</p><p>One day, a villain called Minus threatened to subtract all the happiness from the kingdom. "Without happiness," Minus cackled, "numbers have no meaning!"</p><p>Young Uno — the number 1 — had an idea. "But one is the beginning of everything! Every number is made of ones!" She showed Minus how 1+1+1+1+1 made 5, and 5+5 made 10, and on and on to infinity.</p><p>"You can never subtract everything," Uno said, "because you can always add more." The kingdom cheered. Even Minus smiled, just a little.</p><p>And that is how the number 1 saved mathematics forever.</p>`,
    description:"Young Uno the number 1 saves the Kingdom of Numerica from the villain called Minus!", duration:"8 min" },
  { id:15, title:"Shapes Everywhere!", category:"math", emoji:"🔷", color:"#4ECDC4", bg:"rgba(78,205,196,0.2)", age:"4-6", rating:4.8, isNew:true,
    story:`<p>Rosie had a superpower: she could see shapes in EVERYTHING. The window was a rectangle. Her cookie was a circle. Her sandwich, when she cut it diagonally, became two triangles!</p><p>"Shapes are hiding everywhere," she told her baby brother. He just stared at her. She decided to show him instead.</p><p>She walked him through the house pointing at every shape she found — the square tiles on the bathroom floor, the oval mirror in the hallway, the hexagonal pattern on the kitchen tablecloth.</p><p>Outside, she found shapes in nature too: the circular sun, triangular mountains, the spiraling pattern in a snail's shell. "The world," she told her brother very seriously, "is a math lesson that never ends."</p><p>Her baby brother laughed, grabbed a cracker, and held it up. It was a circle. He was learning already.</p>`,
    description:"Rosie discovers that every single thing in the world is hiding a shape — you just have to look!", duration:"6 min" },

  // SCIENCE
  { id:16, title:"Why Volcanoes Erupt", category:"science", emoji:"🌋", color:"#FF6B6B", bg:"rgba(255,107,107,0.2)", age:"7-11", rating:4.6, isFeatured:true,
    story:`<p>Professor Pebble was the world's smallest geologist — she was actually a talking rock, only 3 centimeters tall. But she had a BIG job: explaining volcanoes to anyone who would listen.</p><p>"Think of the Earth like a hard-boiled egg," she told her student, young Leon. "But inside, instead of egg, there's superheated rock called magma — so hot it flows like syrup!"</p><p>Leon tried to imagine. "Why does it come out?" he asked. Professor Pebble climbed onto a stack of books and gestured grandly. "Pressure! Magma is lighter than solid rock. It rises through cracks. When it finds a weak spot — BOOM! It becomes lava."</p><p>Leon's eyes went wide. "Is it dangerous?" Professor Pebble nodded. "Yes. But it also builds new land, new islands, new mountains. Destruction and creation at the same time."</p><p>Leon thought this was perhaps the most amazing thing he had ever heard. He decided right then to become a geologist. He wasn't sure he could talk to rocks, but he could certainly listen to them.</p>`,
    description:"Tiny talking geologist Professor Pebble explains the incredible science of volcanoes.", duration:"10 min" },
  { id:17, title:"The Life of a Butterfly", category:"science", emoji:"🦋", color:"#F472B6", bg:"rgba(244,114,182,0.2)", age:"5-8", rating:4.5, isNew:true,
    story:`<p>My name is Flutter, and I'm going to tell you the story of the most incredible journey I ever took — my own life.</p><p>It began as an egg, tiny as a grain of rice, stuck to a leaf. I had no idea what I was yet. Then I hatched into a caterpillar — round, green, and very, very hungry. I ate and ate and ate until I was fat with energy.</p><p>Then something strange happened. My body told me: it's time to change. I wrapped myself in silk — a little bedroom I made myself — and slept. Inside my chrysalis, I became liquid. No legs, no eyes, just... possibility.</p><p>When I emerged, I was something completely different. Wings! Four of them, painted like stained glass windows! For the first time, I saw the sky. I spread my wings and rose into it.</p><p>Being a butterfly is wonderful. But becoming one? That's the real adventure.</p>`,
    description:"Flutter the butterfly narrates her own incredible journey from egg to glorious wings.", duration:"8 min" },

  // LANGUAGE
  { id:18, title:"Hello in 10 Languages", category:"language", emoji:"🌍", color:"#A78BFA", bg:"rgba(167,139,250,0.2)", age:"5-9", rating:4.8,
    story:`<p>Ama had moved to four countries by the time she was eight, and she had a secret skill: she could say hello in ten languages.</p><p>"Hola!" she said to her new Spanish neighbor. "Bonjour!" to the French exchange student. "Ciao!" to the Italian cook at the school cafeteria. Each person she greeted lit up like a lamp.</p><p>"Why do you bother learning to say hello?" her new friend Danny asked. Ama thought about it. "Because hello is the door," she said. "Every door looks different. But they all open to the same thing — someone who wants to be seen."</p><p>Danny asked her to teach him. They spent the afternoon counting: Hola, Bonjour, Ciao, Olá, Merhaba, Konnichiwa, Namaste, Annyeong, Sawubona, Shalom.</p><p>Ten doors. Ten worlds. Ten ways to say: I see you. You matter. Hello.</p>`,
    description:"Ama knows hello in ten languages — and discovers that every hello opens a door.", duration:"7 min" },
  { id:19, title:"The Word Collector", category:"language", emoji:"📝", color:"#FB923C", bg:"rgba(251,146,60,0.2)", age:"7-10", rating:4.6,
    story:`<p>Felix collected words the way other children collected stamps or toys. He wrote them in a small red notebook: words he liked the sound of, words with funny spellings, words in other languages that had no English translation.</p><p>His favorite discovery was a Japanese word: <em>komorebi</em> — the way sunlight filters through leaves, making dappled shadows. "We don't even have a word for that in English!" he told his mother, delighted.</p><p>Then he found <em>saudade</em> in Portuguese: a deep longing for something you love that is gone. And <em>hygge</em> in Danish: the warm comfort of being with people you love.</p><p>"Some feelings," Felix wrote in his notebook, "are so specific that only one language thought to name them. That means every language sees the world a little differently."</p><p>He closed his notebook and looked out the window at the komorebi dancing on his bedroom wall. He was going to need a bigger notebook.</p>`,
    description:"Felix collects words from all languages and discovers that each one holds a unique piece of the world.", duration:"9 min" },

  // ─── CLASSICS ───────────────────────────────────────────
  { id:20, title:"The Little Prince", category:"classics", emoji:"👑", color:"#FFE66D", bg:"rgba(255,230,109,0.2)", age:"7-12", rating:5.0, isClassic:true, author:"Antoine de Saint-Exupéry · 1943",
    story:`<p>A pilot crashed in the Sahara Desert and met the most unusual person he had ever seen — a small boy with golden hair who had fallen from a tiny planet called Asteroid B-612.</p><p>"Please draw me a sheep," the little prince said, as if this were the most natural request in the world.</p><p>The little prince had left his home planet because of a proud and difficult rose he loved very much. He visited six other planets, each ruled by a strange grown-up: a king with no subjects, a conceited man, a businessman who counted stars he didn't own, a lamplighter, a geographer. Each one, the little prince found, was very lonely in their own way.</p><p>On Earth, he met a fox who taught him the most important secret: <em>"It is only with the heart that one can see rightly; what is essential is invisible to the eye."</em></p><p>And his rose, with all her thorns and vanity, was his rose — because he had watered her, sheltered her from the wind, and listened to her. That made her the most important rose in the whole universe.</p><p>The pilot never forgot the little prince. And on starry nights, he would look up and hear, somewhere in the sky, the sound of bells — five hundred million little stars, all laughing.</p>`,
    description:"A pilot stranded in the desert meets a mysterious little prince from a faraway star.", duration:"12 min" },

  { id:21, title:"Tom Thumb", category:"classics", emoji:"👍", color:"#4ADE80", bg:"rgba(74,222,128,0.2)", age:"5-8", rating:4.7, isClassic:true, author:"Charles Perrault · 1697",
    story:`<p>A poor woodcutter and his wife had seven sons. The youngest was no bigger than a thumb and so was called Tom Thumb. Though he was tiny, Tom had the biggest and quickest mind of them all.</p><p>When a famine struck the land, the woodcutter led his children deep into the forest, meaning to leave them there. But clever Tom had overheard the plan. He filled his pockets with white pebbles and dropped them one by one along the path. That night, the pebbles gleamed in the moonlight and guided all seven brothers safely home.</p><p>The second time their father led them away, Tom only had bread crumbs — and the birds ate every one. The boys were truly lost. They stumbled upon the house of a terrible ogre, who had seven daughters of his own.</p><p>While the ogre slept, Tom switched the sleeping caps of the brothers with the golden crowns of the ogre's daughters. In the dark, the ogre mistook his own children for the boys — and Tom led his brothers to safety.</p><p>Tom later stole the ogre's magical seven-league boots, which could cross seven leagues in a single step, and used them to bring news between faraway kingdoms, earning great riches for his whole family.</p><p>Small Tom Thumb proved that courage and cleverness are worth more than any giant's strength.</p>`,
    description:"The tiniest boy in the world outsmarts an ogre and saves his six brothers with sheer cleverness.", duration:"10 min" },

  { id:22, title:"Jack and the Beanstalk", category:"classics", emoji:"🌱", color:"#4ECDC4", bg:"rgba(78,205,196,0.2)", age:"5-9", rating:4.8, isClassic:true, author:"English Fairy Tale · 1807",
    story:`<p>Jack and his mother were very poor. All they had was an old cow. One morning, his mother sent Jack to sell the cow at the market. But on the road, Jack met a mysterious old man who offered him five magic beans in exchange.</p><p>His mother was furious. She threw the beans out the window and sent Jack to bed without supper. But overnight, the beans grew into an enormous beanstalk that disappeared into the clouds.</p><p>Jack climbed. Up and up and up, until he reached a land above the clouds where a gigantic castle stood. Inside lived a terrible giant and his kind wife. <em>"Fee-fi-fo-fum! I smell the blood of an Englishman!"</em> roared the giant. But his wife hid Jack.</p><p>Jack discovered the giant had a bag of gold coins, a magic hen that laid golden eggs, and a golden harp that played by itself. On three separate visits, Jack crept past the sleeping giant and took each treasure.</p><p>On the third visit, the harp cried out, waking the giant. Jack scrambled down the beanstalk with the giant thundering behind him. At the bottom, Jack grabbed an axe, chopped through the beanstalk, and the giant fell with a tremendous crash.</p><p>Jack and his mother were never poor again. And Jack learned that bravery, even when your legs are shaking, can change everything.</p>`,
    description:"Bold Jack trades a cow for magic beans — and climbs into a dangerous world of giants and golden treasures.", duration:"11 min" },

  { id:23, title:"The Wizard of Oz", category:"classics", emoji:"🌪️", color:"#A78BFA", bg:"rgba(167,139,250,0.2)", age:"6-10", rating:4.9, isClassic:true, isFeatured:true, author:"L. Frank Baum · 1900",
    story:`<p>Dorothy lived on a grey Kansas farm with her Auntie Em and her little dog Toto. One day, a tremendous cyclone lifted their house into the sky and dropped it in the magical Land of Oz — right on top of the Wicked Witch of the East.</p><p>The grateful Munchkins celebrated, and the Good Witch Glinda told Dorothy to follow the Yellow Brick Road to the Emerald City, where the great Wizard of Oz might help her get home.</p><p>Along the way, Dorothy met three friends. The Scarecrow wanted a brain. The Tin Man wanted a heart. The Cowardly Lion wanted courage. Together, they walked the golden road, facing dangers and wonders at every turn.</p><p>When they finally reached the Emerald City and stood before the great and terrible Oz, a little dog pulled back the curtain to reveal — an ordinary man with a smoke machine and a loud voice. A humbug! But a kind one.</p><p>"You never needed me," the Wizard told her friends. "The Scarecrow had wisdom all along. The Tin Man had the biggest heart I've seen. The Lion showed courage at every step." He gave them symbols to believe in what they already had.</p><p>As for Dorothy — she clicked her ruby slippers together three times and said: <em>"There's no place like home."</em> And she was right.</p>`,
    description:"Dorothy is swept to magical Oz and must follow the Yellow Brick Road to find her way back home.", duration:"13 min" },

  { id:24, title:"Alice in Wonderland", category:"classics", emoji:"🐇", color:"#F472B6", bg:"rgba(244,114,182,0.2)", age:"6-11", rating:4.9, isClassic:true, isFeatured:true, author:"Lewis Carroll · 1865",
    story:`<p>Alice was sitting on the riverbank feeling bored when a White Rabbit rushed past, looking at his pocket watch and muttering, <em>"I'm late! I'm late! For a very important date!"</em></p><p>Alice followed him down a rabbit hole and fell for what seemed like forever, past shelves of books and jars of marmalade, until she landed with a thump in a most peculiar hall.</p><p>In Wonderland, nothing made sense — and everything was wonderful. Alice grew tall, then shrank small. She attended a mad tea party where the Hatter and the March Hare celebrated "un-birthdays." She played croquet with flamingo mallets and hedgehog balls on the Queen of Hearts' lawn.</p><p>"Off with their heads!" screamed the Queen at everything. But Alice was not afraid. The more nonsense she met, the more certain she became of who she actually was.</p><p>She met a Cheshire Cat who disappeared leaving only his smile, a caterpillar who asked difficult questions, and a Mock Turtle who wept without reason. Through it all, Alice kept her curiosity and her kind heart.</p><p>When the Queen's court tried to put Alice on trial, she stood up, declared it all nonsense, and woke — to find she had been dreaming by the riverside all along. But she carried Wonderland inside her forever: the knowledge that the most interesting worlds are the ones we dare to fall into.</p>`,
    description:"Alice follows a White Rabbit down a hole and discovers a fantastical world where nothing makes sense — but everything is magical.", duration:"14 min" },

  { id:25, title:"Cinderella", category:"classics", emoji:"👠", color:"#60A5FA", bg:"rgba(96,165,250,0.2)", age:"4-8", rating:4.8, isClassic:true, author:"Charles Perrault · 1697",
    story:`<p>Cinderella had the kindest heart in the kingdom, even though her stepmother and two stepsisters made her do all the housework while they wore fine clothes and went to grand parties.</p><p>When the Prince announced a royal ball, Cinderella's stepsisters laughed at the idea of her attending. But as Cinderella wept by the fireplace, her Fairy Godmother appeared in a shimmer of light.</p><p>With a wave of her wand, a pumpkin became a golden carriage, mice became white horses, and Cinderella's rags became the most beautiful gown anyone had ever seen — with two glass slippers that fit only her feet.</p><p>"You must leave before the clock strikes midnight," the Fairy Godmother warned, "for the magic ends at twelve."</p><p>At the ball, the Prince danced only with Cinderella. She was more radiant than any star. But when the clock began to chime midnight, she fled — leaving behind one tiny glass slipper on the palace steps.</p><p>The Prince searched the entire kingdom with the slipper, and when it slipped perfectly onto Cinderella's foot, he knew he had found her. Her stepsisters' feet were too big and too small, too mean and too proud.</p><p>Cinderella married the Prince, not because she was beautiful, but because she had never let cruelty make her cruel. Her goodness was the glass slipper — it fit nobody else.</p>`,
    description:"A kind girl with a wicked stepfamily, a Fairy Godmother, and one perfect glass slipper changes her whole life.", duration:"10 min" },

  { id:26, title:"Pinocchio", category:"classics", emoji:"🤥", color:"#FB923C", bg:"rgba(251,146,60,0.2)", age:"5-9", rating:4.7, isClassic:true, author:"Carlo Collodi · 1883",
    story:`<p>Old Geppetto was a lonely carpenter who carved a puppet from a piece of enchanted wood. When he finished, the puppet winked at him, kicked him on the shin, and ran away down the street. Geppetto named him Pinocchio.</p><p>The Blue Fairy, seeing how Geppetto loved his puppet, gave Pinocchio the gift of life. She also gave him a conscience — a tiny cricket named Jiminy — and a simple rule: every lie would make his nose grow longer.</p><p>Pinocchio was not a bad puppet. He simply kept making bad choices. He skipped school to see a puppet show. He followed a fox and a cat who stole his gold coins. Every time he lied to the Blue Fairy, his nose shot forward like a branch, and every time he admitted the truth, she forgave him.</p><p>His greatest test came when he was swallowed by a giant whale — and found Geppetto inside, who had also been swallowed while searching for his lost son. Together they escaped, Pinocchio pulling his father through the dark water to shore.</p><p>The Blue Fairy watched it all. A puppet who would risk his life for someone else had proven he had a real heart. She touched his forehead, and Pinocchio woke as a real boy — warm, soft, alive.</p><p>"Father!" he cried, and Geppetto held him close and wept with joy. The greatest magic, it turns out, is simply love.</p>`,
    description:"A wooden puppet with a growing nose learns that honesty and love are what turn him into a real boy.", duration:"12 min" },

  { id:27, title:"Snow White", category:"classics", emoji:"🍎", color:"#FF6B6B", bg:"rgba(255,107,107,0.2)", age:"5-8", rating:4.6, isClassic:true, author:"Brothers Grimm · 1812",
    story:`<p>Snow White had skin white as snow, lips red as blood, and hair black as ebony. Her stepmother, the Evil Queen, had a magic mirror that told her every day that she was the fairest in the land — until the day it answered: <em>"Snow White is fairer still."</em></p><p>Wild with jealousy, the Queen ordered a huntsman to take Snow White into the forest and kill her. But the huntsman couldn't do it. He let Snow White run, and she ran until she found a tiny cottage in the deep woods.</p><p>Inside lived seven dwarfs who worked in a diamond mine — Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy, and Dopey. They welcomed Snow White, and she cooked and cleaned and sang for them, and they were all happy together.</p><p>But the Queen's mirror told her Snow White still lived. Three times the Queen disguised herself and came to the cottage. The third time, she brought a poisoned apple so beautiful Snow White couldn't resist one bite — and fell into a deep, deathlike sleep.</p><p>The dwarfs placed her in a glass coffin on a hillside and wept. Then a Prince who had heard of her kindness rode by. He was so moved by her beauty and goodness that he asked to take the coffin. As his servants lifted it, it jolted — and the piece of poisoned apple fell from Snow White's lips.</p><p>She opened her eyes. The Prince smiled. And somewhere, a mirror reflected the truest truth of all: that beauty on the inside is the only kind that never fades.</p>`,
    description:"After a jealous Queen's poisoned apple, brave Snow White is rescued by seven loyal dwarfs — and a prince's kindness.", duration:"11 min" },

  { id:28, title:"Little Red Riding Hood", category:"classics", emoji:"🐺", color:"#FF6B6B", bg:"rgba(255,107,107,0.2)", age:"4-7", rating:4.5, isClassic:true, author:"Brothers Grimm · 1812",
    story:`<p>Little Red Riding Hood got her name from the beautiful red cloak her grandmother had sewn for her. One morning, her mother packed a basket of cakes and wine for Grandmother, who was ill in her cottage across the forest.</p><p>"Walk straight along the path," her mother warned. "Don't talk to strangers. Don't stray into the trees." Little Red Riding Hood promised.</p><p>But the forest was so lovely — full of flowers and birdsong — that when a Wolf greeted her with a friendly smile, she stopped to chat. She told him exactly where her grandmother lived. The Wolf ran ahead on a shortcut, swallowed Grandmother whole, put on her nightgown and cap, and climbed into her bed to wait.</p><p>When Little Red Riding Hood arrived and knocked, the Wolf called out in a thin, high voice, "Come in, dear!" The cottage smelled odd. Grandmother looked strange.</p><p>"What big eyes you have, Grandmother!" "All the better to see you with, my dear." "What big ears you have!" "All the better to hear you with." "What big teeth you have!" "All the better to EAT you with!" And the Wolf leapt from the bed.</p><p>A passing woodcutter heard the screams, burst through the door, and saved them both. Little Red Riding Hood never forgot: the prettiest smile can belong to the most dangerous creature. Always, always walk straight along the path.</p>`,
    description:"A little girl in a red cloak must outwit a cunning Wolf on her way to visit her grandmother.", duration:"8 min" },

  { id:29, title:"The Ugly Duckling", category:"classics", emoji:"🦢", color:"#4ECDC4", bg:"rgba(78,205,196,0.2)", age:"4-8", rating:4.9, isClassic:true, author:"Hans Christian Andersen · 1843",
    story:`<p>One summer morning, a mother duck's eggs hatched one by one — fluffy yellow ducklings, each more adorable than the last. Except for one: a large, grey, awkward creature that looked like nothing the other animals had ever seen.</p><p>"How ugly that duckling is!" said the hens. "What a strange, clumsy thing," quacked the ducks. Even his own brothers and sisters pecked at him. Only his mother tried to defend him.</p><p>The ugly duckling ran away. He tried to join wild ducks — they didn't want him. He took shelter with an old woman, her hen, and her cat — they made fun of him. Through a long, bitter winter he survived alone, nearly frozen to death in an icy pond.</p><p>Spring came at last. The ugly duckling heard a rustling above him and looked up to see three magnificent white swans gliding across the sky. His heart ached with longing.</p><p>He flew toward them, certain they would peck him away. Instead, they bent their elegant necks in welcome. He looked down at his own reflection in the water — and saw not a grey, clumsy duckling, but a beautiful white swan.</p><p>He had never been a duckling at all. He had simply not yet become what he truly was. The children who ran along the bank cried out: "Look — a new swan, and the most beautiful of all!"</p><p>And the swan ruffled his wings, lifted his graceful neck, and felt — for the first time in his life — that he was exactly where he belonged.</p>`,
    description:"A bird mocked for being different discovers he was never ugly — only unfinished, and destined to be magnificent.", duration:"10 min" },

  { id:30, title:"Hansel and Gretel", category:"classics", emoji:"🏠", color:"#FFE66D", bg:"rgba(255,230,109,0.2)", age:"5-9", rating:4.6, isClassic:true, author:"Brothers Grimm · 1812",
    story:`<p>Hansel and Gretel lived at the edge of a great forest with their father and their cold-hearted stepmother. When a terrible famine came, the stepmother convinced the woodcutter to abandon his children in the forest.</p><p>Clever Hansel had heard the plan. The first time, he filled his pockets with white pebbles that glinted in the moonlight and guided them home. The second time, he had only bread crumbs — and the birds ate every one.</p><p>Lost and hungry, the children followed a white bird through the forest until they found the most astonishing sight: a cottage built entirely of gingerbread, cake, and sugar candy, with windows of clear sugar. They began to eat hungrily.</p><p>But the cottage belonged to a witch who ate children. She locked Hansel in a cage to fatten him up and made Gretel do the housework. Every day the witch felt Hansel's finger to see if he was fat enough — and every day clever Hansel held out a chicken bone instead.</p><p>On the day the witch decided she'd waited long enough, she told Gretel to climb into the oven to check the heat. Gretel pretended not to understand how. When the witch leaned in to show her, Gretel gave her one great shove, slammed the oven door, and that was the end of the witch.</p><p>They found the witch's treasure chest filled with jewels and pearls, filled their pockets, and found their way home. Their stepmother had died. Their father wept and held them close, and with the witch's treasure they were never poor or hungry again.</p>`,
    description:"Two clever siblings lost in the forest outsmart a candy-house witch who plans to eat them for dinner.", duration:"12 min" },

  { id:31, title:"The Three Little Pigs", category:"classics", emoji:"🐷", color:"#F472B6", bg:"rgba(244,114,182,0.2)", age:"3-7", rating:4.8, isClassic:true, author:"English Fairy Tale · 1849",
    story:`<p>Three little pigs set out to make their way in the world. Their mother had only one piece of advice: "Watch out for the Big Bad Wolf."</p><p>The first little pig built his house of straw because it was quick and easy, and he wanted to get to playing as fast as possible. The second little pig built his house of sticks — a little sturdier, but still finished in an afternoon. The third little pig worked hard all day and long into the evening, building his house brick by brick by brick.</p><p>Soon enough, the Big Bad Wolf came huffing and puffing down the lane. At the straw house, he huffed and he puffed — and he blew it right down. The first pig fled to his brother's stick house.</p><p>The Wolf huffed and puffed at the stick house — and blew that down too. The two pigs squealed and raced to their brother's brick house.</p><p>The Wolf huffed. He puffed. He huffed and puffed until his face was red — but the brick house stood firm. He climbed onto the roof to come down the chimney, and found — a pot of boiling water waiting for him. He leapt off the roof and ran away so fast he was never seen again.</p><p>The three little pigs lived together in the brick house, safe and snug. And the moral sang itself: <em>hard work today keeps the wolf away.</em></p>`,
    description:"Three pig brothers and a very bad Wolf teach the most important lesson: hard work always wins in the end.", duration:"7 min" },
];

// ─── STATE ─────────────────────────────────────────────
let favorites = JSON.parse(localStorage.getItem('kidsFavorites') || '[]');
let currentBook = null;
let currentTab = 'read';
let activeCategory = 'all';
let audioInterval = null;
let audioTime = 0;
let audioPlaying = false;

// ─── INIT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  renderFeatured();
  renderNewArrivals();
  renderClassics();
  renderAllBooks('all');
  renderCategoryChips();
  updateFavBadge();

  // create mobile overlay for sidebar
  const overlay = document.createElement('div');
  overlay.className = 'overlay-mobile';
  overlay.id = 'mobileOverlay';
  overlay.addEventListener('click', () => closeSidebar());
  document.body.appendChild(overlay);

  document.getElementById('searchInput').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length > 0) {
      showPage('all', null);
      renderAllBooks(activeCategory, q);
    } else {
      renderAllBooks(activeCategory);
    }
  });
});

function createStars() {
  const c = document.getElementById('stars');
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-duration:${2+Math.random()*4}s;animation-delay:${-Math.random()*5}s;opacity:${0.1+Math.random()*0.5};width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;`;
    c.appendChild(s);
  }
}

// ─── NAVIGATION ────────────────────────────────────────
function showPage(page, navEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  if (navEl) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    navEl.classList.add('active');
  }
  if (page === 'favorites') renderFavoritesPage();
  if (page === 'all') { activeCategory = 'all'; renderAllBooks('all'); updateChips('all'); }
}

function scrollToEdu() {
  document.getElementById('edu-section').scrollIntoView({ behavior:'smooth' });
}

// ─── RENDER FUNCTIONS ──────────────────────────────────
function renderFeatured() {
  const featured = BOOKS.filter(b => b.isFeatured);
  const container = document.getElementById('featuredGrid');
  container.innerHTML = featured.map(b => `
    <div class="featured-card" onclick="openBook(${b.id})" style="background:${b.bg};border-color:${b.color}30;">
      <div class="cover-lg">${b.emoji}</div>
      <div class="info">
        <div class="tag" style="background:${b.color}30;color:${b.color};">${categoryLabel(b.category)}</div>
        <h3>${b.title}</h3>
        <p>${b.description}</p>
        <button class="read-btn" style="background:${b.color};color:#fff;" onclick="event.stopPropagation();openBook(${b.id})">📖 Read Now</button>
      </div>
    </div>`).join('');
}

function renderNewArrivals() {
  const news = BOOKS.filter(b => b.isNew).slice(0, 6);
  document.getElementById('newGrid').innerHTML = news.map(bookCard).join('');
}

function renderClassics() {
  const classics = BOOKS.filter(b => b.category === 'classics').slice(0, 6);
  document.getElementById('classicsGrid').innerHTML = classics.map(bookCard).join('');
}

function renderAllBooks(cat, search = '') {
  let books = cat === 'all' ? BOOKS : BOOKS.filter(b => b.category === cat);
  if (search) books = books.filter(b => b.title.toLowerCase().includes(search) || b.description.toLowerCase().includes(search) || b.category.toLowerCase().includes(search));
  const grid = document.getElementById('allGrid');
  const noR = document.getElementById('noResults');
  if (books.length === 0) { grid.innerHTML = ''; noR.style.display = 'block'; }
  else { noR.style.display = 'none'; grid.innerHTML = books.map(bookCard).join(''); }
  const title = document.getElementById('allTitle');
  if (cat !== 'all') title.textContent = `${categoryEmoji(cat)} ${categoryLabel(cat)} Books`;
  else title.textContent = '📚 All Books';
}

function bookCard(b) {
  const isFav = favorites.includes(b.id);
  return `<div class="book-card" onclick="openBook(${b.id})">
    <div class="book-cover" style="background:${b.bg};">
      ${b.isNew ? `<div class="book-badge" style="background:${b.color};color:#fff;">✨ New</div>` : ''}
      ${b.isClassic ? `<div class="book-badge" style="background:${b.color};color:#fff;">⭐ Classic</div>` : ''}
      <div class="book-rating">⭐ ${b.rating}</div>
      <div class="book-emoji">${b.emoji}</div>
    </div>
    <div class="book-info">
      <div class="book-title">${b.title}</div>
      ${b.author ? `<div style="font-size:0.7rem;color:rgba(255,255,255,0.35);margin-bottom:4px;font-style:italic;">${b.author}</div>` : ''}
      <div class="book-meta">
        <span class="book-category">${categoryLabel(b.category)}</span>
        <span class="book-age">Ages ${b.age}</span>
      </div>
    </div>
    <div class="book-actions">
      <button class="action-btn action-read" onclick="event.stopPropagation();openBook(${b.id})">📖 Read</button>
      <button class="action-btn action-listen" onclick="event.stopPropagation();openBookTab(${b.id},'listen')">🎧 Listen</button>
    </div>
  </div>`;
}

function renderCategoryChips() {
  const cats = ['all','classics','adventure','mystery','sci-fi','friendship','cooking','reflection','math','science','language'];
  document.getElementById('categoryChips').innerHTML = cats.map(c => `
    <div class="chip ${c==='all'?'active':''}" id="chip-${c}" onclick="filterCategory('${c}', null, this)">${categoryEmoji(c)} ${c==='all'?'All':categoryLabel(c)}</div>`).join('');
}

function updateChips(active) {
  document.querySelectorAll('.chip').forEach(c => {
    c.classList.toggle('active', c.id === 'chip-' + active);
  });
}

function filterCategory(cat, navEl, chipEl) {
  activeCategory = cat;
  showPage('all', navEl || document.querySelector('.nav-item:nth-child(2)'));
  renderAllBooks(cat);
  updateChips(cat);
  document.getElementById('searchInput').value = '';
}

function renderFavoritesPage() {
  const favBooks = BOOKS.filter(b => favorites.includes(b.id));
  const g = document.getElementById('favGrid');
  const n = document.getElementById('noFavResults');
  if (favBooks.length === 0) { g.innerHTML = ''; n.style.display = 'block'; }
  else { n.style.display = 'none'; g.innerHTML = favBooks.map(bookCard).join(''); }
}

// ─── SIDEBAR TOGGLE (MOBILE) ─────────────────────────
function toggleSidebar() {
  const as = document.querySelector('aside');
  const overlay = document.getElementById('mobileOverlay');
  if (!as) return;
  const open = as.classList.toggle('open');
  if (overlay) overlay.classList.toggle('show', open);
  // prevent body scroll when open
  document.body.style.overflow = open ? 'hidden' : '';
}

function closeSidebar() {
  const as = document.querySelector('aside');
  const overlay = document.getElementById('mobileOverlay');
  if (!as) return;
  as.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
  document.body.style.overflow = '';
}

// ─── BOOK MODAL ────────────────────────────────────────
function openBook(id) {
  currentBook = BOOKS.find(b => b.id === id);
  if (!currentBook) return;
  document.getElementById('modalCover').textContent = currentBook.emoji;
  document.getElementById('modalTitle').textContent = currentBook.title;
  let subtitle = `${categoryLabel(currentBook.category)} · Ages ${currentBook.age} · ${currentBook.duration} read`;
  if (currentBook.author) subtitle = `${currentBook.author} · ${subtitle}`;
  document.getElementById('modalSubtitle').textContent = subtitle;
  switchTab('read', document.querySelector('.modal-tab'));
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openBookTab(id, tab) {
  openBook(id);
  switchTab(tab, null);
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay')) return;
  stopAudio();
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function switchTab(tab, el) {
  currentTab = tab;
  if (el) {
    document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  } else {
    document.querySelectorAll('.modal-tab').forEach((t,i) => {
      t.classList.toggle('active', ['read','listen','info'][i] === tab);
    });
  }
  const body = document.getElementById('modalBody');
  const isFav = favorites.includes(currentBook.id);
  if (tab === 'read') {
    body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
        <div style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,0.5);font-size:0.85rem;font-weight:600;">
          <span>⏱️ ${currentBook.duration} read</span>
          <span>·</span>
          <span>⭐ ${currentBook.rating}/5</span>
        </div>
        <button onclick="toggleFavorite(${currentBook.id})" style="background:${isFav?'var(--primary)':'rgba(255,255,255,0.08)'};border:2px solid ${isFav?'var(--primary)':'rgba(255,255,255,0.15)'};border-radius:50px;color:#fff;padding:8px 18px;cursor:pointer;font-weight:700;font-size:0.85rem;transition:all 0.2s;font-family:Nunito,sans-serif;">
          ${isFav?'❤️ Saved':'🤍 Save'}
        </button>
      </div>
      <div class="story-text">${currentBook.story.split('</p>').map((p,i)=>`<div class="story-paragraph" style="animation-delay:${i*0.08}s">${p}</p></div>`).join('')}</div>`;
  } else if (tab === 'listen') {
    stopAudio();
    body.innerHTML = `
      <div class="audio-player">
        <div class="audio-title">${currentBook.emoji} ${currentBook.title}</div>
        <div class="audio-subtitle">Narrated by a friendly voice · ${currentBook.duration}</div>
        <div class="waveform" id="waveform">${Array.from({length:28},(_,i)=>`<div class="wave-bar" id="wb${i}" style="animation-duration:${0.4+Math.random()*0.8}s;animation-delay:${Math.random()*0.5}s;height:${6+Math.random()*20}px;"></div>`).join('')}</div>
        <button class="play-btn" id="playBtn" onclick="toggleAudio()">▶</button>
        <div class="audio-progress">
          <div class="progress-bar" onclick="seekAudio(event)"><div class="progress-fill" id="progressFill"></div></div>
          <div class="time-labels"><span id="curTime">0:00</span><span id="totalTime">${currentBook.duration}</span></div>
        </div>
        <div class="audio-controls">
          <button class="ctrl-btn" onclick="skipAudio(-15)">⏮ 15s</button>
          <button class="ctrl-btn" onclick="changeSpeed()">🐢 1x</button>
          <button class="ctrl-btn" onclick="skipAudio(15)">15s ⏭</button>
        </div>
      </div>`;
  } else {
    body.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div style="background:rgba(255,255,255,0.05);border-radius:16px;padding:20px;">
          <div style="font-size:3rem;margin-bottom:10px;">${currentBook.emoji}</div>
          <h3 style="font-family:'Baloo 2',cursive;font-size:1.3rem;margin-bottom:8px;">${currentBook.title}</h3>
          ${currentBook.author ? `<p style="color:var(--secondary);font-size:0.9rem;margin-bottom:10px;font-weight:700;">by ${currentBook.author}</p>` : ''}
          <p style="color:rgba(255,255,255,0.6);line-height:1.6;">${currentBook.description}</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          ${infoItem('📚','Category',categoryLabel(currentBook.category))}
          ${infoItem('👶','Age Group',`Ages ${currentBook.age}`)}
          ${infoItem('⭐','Rating',`${currentBook.rating} / 5.0`)}
          ${infoItem('⏱️','Reading Time',currentBook.duration)}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <button onclick="toggleFavorite(${currentBook.id})" style="padding:14px;background:${isFav?'var(--primary)':'rgba(255,255,255,0.08)'};border:2px solid ${isFav?'var(--primary)':'rgba(255,255,255,0.15)'};border-radius:14px;color:#fff;font-weight:700;font-size:0.95rem;cursor:pointer;transition:all 0.2s;font-family:Nunito,sans-serif;">
            ${isFav?'❤️ Remove from Favorites':'🤍 Add to Favorites'}
          </button>
          <button onclick="shareBook(${currentBook.id})" style="padding:14px;background:linear-gradient(135deg,var(--secondary),var(--blue));border:2px solid transparent;border-radius:14px;color:#fff;font-weight:700;font-size:0.95rem;cursor:pointer;transition:all 0.2s;font-family:Nunito,sans-serif;display:flex;align-items:center;justify-content:center;gap:6px;">
            📤 Share Story
          </button>
        </div>
      </div>`;
  }
}

function infoItem(icon, label, val) {
  return `<div style="background:rgba(255,255,255,0.05);border-radius:14px;padding:14px;">
    <div style="font-size:1.5rem;margin-bottom:4px;">${icon}</div>
    <div style="font-size:0.75rem;color:rgba(255,255,255,0.4);font-weight:700;margin-bottom:2px;">${label}</div>
    <div style="font-weight:700;font-size:0.95rem;">${val}</div>
  </div>`;
}

// ─── AUDIO PLAYER ─────────────────────────────────────
let audioSpeed = 1, totalSecs = 480;

function toggleAudio() {
  audioPlaying = !audioPlaying;
  const btn = document.getElementById('playBtn');
  if (!btn) return;
  btn.textContent = audioPlaying ? '⏸' : '▶';
  btn.classList.toggle('playing', audioPlaying);
  const bars = document.querySelectorAll('.wave-bar');
  bars.forEach(b => b.classList.toggle('active', audioPlaying));
  if (audioPlaying) {
    audioInterval = setInterval(() => {
      audioTime = Math.min(audioTime + audioSpeed, totalSecs);
      const pct = (audioTime/totalSecs)*100;
      const fill = document.getElementById('progressFill');
      const cur = document.getElementById('curTime');
      if (fill) fill.style.width = pct + '%';
      if (cur) cur.textContent = formatTime(audioTime);
      if (audioTime >= totalSecs) stopAudio();
    }, 1000);
  } else {
    clearInterval(audioInterval);
  }
}

function stopAudio() {
  audioPlaying = false; audioTime = 0;
  clearInterval(audioInterval);
}

function seekAudio(e) {
  const bar = e.currentTarget;
  const pct = e.offsetX / bar.offsetWidth;
  audioTime = pct * totalSecs;
  const fill = document.getElementById('progressFill');
  const cur = document.getElementById('curTime');
  if (fill) fill.style.width = (pct*100)+'%';
  if (cur) cur.textContent = formatTime(audioTime);
}

function skipAudio(secs) {
  audioTime = Math.max(0, Math.min(totalSecs, audioTime + secs));
  const fill = document.getElementById('progressFill');
  const cur = document.getElementById('curTime');
  if (fill) fill.style.width = ((audioTime/totalSecs)*100)+'%';
  if (cur) cur.textContent = formatTime(audioTime);
}

let speedIdx = 0;
const speeds = [1, 1.25, 1.5, 0.75];
const speedLabels = ['🐢 1x','🐇 1.25x','🚀 1.5x','🐌 0.75x'];
function changeSpeed() {
  speedIdx = (speedIdx+1) % speeds.length;
  audioSpeed = speeds[speedIdx];
  const btn = document.querySelector('.ctrl-btn:nth-child(2)');
  if (btn) btn.textContent = speedLabels[speedIdx];
}

function formatTime(s) {
  const m = Math.floor(s/60), sec = Math.floor(s%60);
  return `${m}:${sec.toString().padStart(2,'0')}`;
}

// ─── FAVORITES ─────────────────────────────────────────
function toggleFavorite(id) {
  const idx = favorites.indexOf(id);
  if (idx === -1) {
    favorites.push(id);
    showToast('❤️', 'Added to favorites!');
  } else {
    favorites.splice(idx, 1);
    showToast('💔', 'Removed from favorites');
  }
  localStorage.setItem('kidsFavorites', JSON.stringify(favorites));
  updateFavBadge();
  renderFavPanel();
  if (currentBook && currentBook.id === id) switchTab(currentTab, null);
}

function updateFavBadge() {
  const n = favorites.length;
  const badge = document.getElementById('favBadge');
  const countBadge = document.getElementById('favCountBadge');
  badge.style.display = n > 0 ? 'flex' : 'none';
  badge.textContent = n;
  if (countBadge) {
    countBadge.style.display = n > 0 ? 'inline' : 'none';
    countBadge.textContent = n;
  }
  document.getElementById('favPanelCount').textContent = n > 0 ? `(${n})` : '';
}

function openFavPanel() {
  renderFavPanel();
  document.getElementById('favPanel').classList.add('open');
}

function closeFavPanel() {
  document.getElementById('favPanel').classList.remove('open');
}

function renderFavPanel() {
  const list = document.getElementById('favPanelList');
  const favBooks = BOOKS.filter(b => favorites.includes(b.id));
  if (favBooks.length === 0) {
    list.innerHTML = `<div class="fav-empty"><div class="empty-icon">📚</div><p>No favorites yet!<br>Tap ❤️ on any book to save it here.</p></div>`;
    return;
  }
  list.innerHTML = favBooks.map(b => `
    <div class="fav-item">
      <div class="fav-cover">${b.emoji}</div>
      <div class="fav-info">
        <div class="fav-title">${b.title}</div>
        <div class="fav-category">${categoryLabel(b.category)} · Ages ${b.age}</div>
      </div>
      <div class="fav-actions">
        <button class="fav-btn" onclick="openBook(${b.id});closeFavPanel();" title="Open">📖</button>
        <button class="fav-btn" onclick="toggleFavorite(${b.id})" title="Remove" style="color:var(--primary);">❤️</button>
      </div>
    </div>`).join('');
}

// ─── SHARE ─────────────────────────────────────────────
let shareContext = null; // 'app', 'book', or 'favorites'

function shareApp() {
  shareContext = 'app';
  document.getElementById('shareModalIcon').textContent = '📱';
  document.getElementById('shareModalTitle').textContent = 'Share Kids Tales App';
  document.getElementById('shareModalSubtitle').textContent = 'Introduce magical reading to your friends!';
  document.getElementById('shareModalText').textContent = 'Discover 31 amazing stories, classics, and educational books for children!';
  document.getElementById('shareExtraInfo').style.display = 'block';
  document.getElementById('shareExtraText').textContent = '🌟 Kids Tales App - A magical library for young readers';
  document.getElementById('shareUrl').textContent = 'https://kidstales.app';
  document.getElementById('shareOverlay').classList.add('open');
}

function shareFavorites() {
  if (favorites.length === 0) {
    showToast('📚', 'Add books to favorites first!');
    return;
  }
  shareContext = 'favorites';
  document.getElementById('shareModalIcon').textContent = '❤️';
  document.getElementById('shareModalTitle').textContent = 'Share My Library';
  document.getElementById('shareModalSubtitle').textContent = 'Share your favorite books!';
  document.getElementById('shareModalText').textContent = `I'm sharing my ${favorites.length} favorite books from Kids Tales!`;
  document.getElementById('shareExtraInfo').style.display = 'block';
  document.getElementById('shareExtraText').textContent = `📚 ${favorites.length} favorite book${favorites.length > 1 ? 's' : ''} from my Kids Tales library`;
  document.getElementById('shareUrl').textContent = 'https://kidstales.app/list/abc123';
  document.getElementById('shareOverlay').classList.add('open');
}

function shareBook(id) {
  const book = BOOKS.find(b => b.id === id);
  if (!book) return;
  shareContext = 'book';
  document.getElementById('shareModalIcon').textContent = book.emoji;
  document.getElementById('shareModalTitle').textContent = `Share: ${book.title}`;
  document.getElementById('shareModalSubtitle').textContent = 'Share this amazing story!';
  document.getElementById('shareModalText').textContent = `Check out "${book.title}" on Kids Tales App! ${book.description}`;
  document.getElementById('shareExtraInfo').style.display = 'block';
  document.getElementById('shareExtraText').textContent = `✨ ${book.title} - A ${categoryLabel(book.category).toLowerCase()} story for ages ${book.age}`;
  document.getElementById('shareUrl').textContent = `https://kidstales.app/book/${book.id}`;
  document.getElementById('shareOverlay').classList.add('open');
}

function closeShare(e) {
  if (e && e.target !== document.getElementById('shareOverlay')) return;
  document.getElementById('shareOverlay').classList.remove('open');
  shareContext = null;
}

function doShare(method) {
  let text = '';
  const book = shareContext === 'book' ? currentBook : null;
  
  if (shareContext === 'app') {
    text = `📱 Kids Tales App 🎉\n\nDiscover 31 amazing stories, classics, and educational books!\n\n✨ Features:\n📚 31 interactive stories\n🏛️ 12 classic tales\n📖 Read & listen modes\n❤️ Save your favorites\n🌟 Beautiful animations\n\nDownload now: https://kidstales.app`;
  } else if (shareContext === 'favorites') {
    const favBooks = BOOKS.filter(b => favorites.includes(b.id));
    const list = favBooks.map(b => `${b.emoji} ${b.title}`).join('\n');
    text = `📚 My Kids Tales favorites:\n\n${list}\n\nFind them at https://kidstales.app`;
  } else if (shareContext === 'book' && book) {
    text = `📚 Check out: ${book.title}\n\n${book.emoji} ${categoryLabel(book.category)}\nAges ${book.age}\n\n${book.description}\n\nRead on Kids Tales App: https://kidstales.app`;
  }

  if (method === 'whatsapp') window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  else if (method === 'email') window.open(`mailto:?subject=${encodeURIComponent('Check out Kids Tales App!')}&body=${encodeURIComponent(text)}`);
  else if (method === 'copy') { navigator.clipboard.writeText(text); showToast('📋','Text copied to clipboard!'); }
  else if (method === 'print') { window.print(); }
}

function copyLink() {
  const url = document.getElementById('shareUrl').textContent;
  navigator.clipboard.writeText(url);
  showToast('🔗','Link copied!');
}

// ─── TOAST ─────────────────────────────────────────────
let toastTimer;
function showToast(icon, msg) {
  clearTimeout(toastTimer);
  document.getElementById('toastIcon').textContent = icon;
  document.getElementById('toastMsg').textContent = msg;
  const t = document.getElementById('toast');
  t.classList.add('show');
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ─── HELPERS ───────────────────────────────────────────
function categoryLabel(c) {
  const map = { adventure:'Adventure', mystery:'Mystery', 'sci-fi':'Sci-Fi', friendship:'Friendship', cooking:'Cooking', reflection:'Reflections', math:'Mathematics', science:'Science', language:'Languages', classics:'Classic Tales' };
  return map[c] || c;
}
function categoryEmoji(c) {
  const map = { all:'🌟', adventure:'🗺️', mystery:'🔍', 'sci-fi':'🚀', friendship:'🤝', cooking:'🍳', reflection:'🌈', math:'🔢', science:'🔬', language:'🌍', classics:'🏛️' };
  return map[c] || '📚';
}
