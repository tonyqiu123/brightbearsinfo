
var teams_h1 = document.querySelectorAll(".teams h6");
function updateTeams(items, index) {
  items.style.background = "none";
  items.style.opacity = "0.3";
  items.style.color = "rgb(0, 0, 0)";
  document.querySelectorAll(".member-container").forEach((items, index) => {
    items.style.display = "none";
  });
}
var all_h1 = document.querySelectorAll(".teams h6")[0];
var cofounders_h1 = document.querySelectorAll(".teams h6")[1];
var communications_h1 = document.querySelectorAll(".teams h6")[2];
var digital_media_h1 = document.querySelectorAll(".teams h6")[3];
var outreach_h1 = document.querySelectorAll(".teams h6")[4];
var research_h1 = document.querySelectorAll(".teams h6")[5];
var content_creators_h1 = document.querySelectorAll(".teams h6")[6];
var marketing_h1 = document.querySelectorAll(".teams h6")[7];
var account_managers_h1 = document.querySelectorAll(".teams h6")[8];
var web_dev_h1 = document.querySelectorAll(".teams h6")[9];

function All(e) {
  teams_h1.forEach(updateTeams)
  all_h1.style.background = "var(--blue-regular)";
  all_h1.style.opacity = "1";
  all_h1.style.color = "rgb(255, 255, 255)";
  document.querySelectorAll(".member-container").forEach((items, index) => {
    items.style.display = "unset";
  })
}


function WebDevelopment(e) {
  teams_h1.forEach(updateTeams)
  web_dev_h1.style.background = "var(--blue-regular)";
  web_dev_h1.style.opacity = "1";
  web_dev_h1.style.color = "rgb(255, 255, 255)";
  document.querySelectorAll(".web-dev").forEach((items, index) => {
    items.style.display = "unset";
  })
}


function Communications(e) {
  teams_h1.forEach(updateTeams)
  communications_h1.style.background = "var(--blue-regular)";
  communications_h1.style.opacity = "1";
  communications_h1.style.color = "rgb(255, 255, 255)";
  document.querySelectorAll(".communications").forEach((items, index) => {
    items.style.display = "unset";
  });
}

function Outreach(e) {
  teams_h1.forEach(updateTeams)
  outreach_h1.style.background = "var(--blue-regular)";
  outreach_h1.style.opacity = "1";
  outreach_h1.style.color = "rgb(255, 255, 255)";
  document.querySelectorAll(".outreach").forEach((items, index) => {
    items.style.display = "unset";
  });
}

function DigitalMedia(e) {
  teams_h1.forEach(updateTeams)
  digital_media_h1.style.background = "var(--blue-regular)";
  digital_media_h1.style.opacity = "1";
  digital_media_h1.style.color = "rgb(255, 255, 255)";
  document.querySelectorAll(".digital-media").forEach((items, index) => {
    items.style.display = "unset";
  });
}

function Research(e) {
  teams_h1.forEach(updateTeams)
  research_h1.style.background = "var(--blue-regular)";
  research_h1.style.opacity = "1";
  research_h1.style.color = "rgb(255, 255, 255)";
  document.querySelectorAll(".research").forEach((items, index) => {
    items.style.display = "unset";
  });
}

function ContentCreators(e) {
  teams_h1.forEach(updateTeams)
  content_creators_h1.style.background = "var(--blue-regular)";
  content_creators_h1.style.opacity = "1";
  content_creators_h1.style.color = "rgb(255, 255, 255)";
  document.querySelectorAll(".content-creator").forEach((items, index) => {
    items.style.display = "unset";
  });
}

function Marketing(e) {
  teams_h1.forEach(updateTeams)
  marketing_h1.style.background = "var(--blue-regular)";
  marketing_h1.style.opacity = "1";
  marketing_h1.style.color = "rgb(255, 255, 255)";
  document.querySelectorAll(".marketing").forEach((items, index) => {
    items.style.display = "unset";
  });
}

function AccountManagers(e) {
  teams_h1.forEach(updateTeams)
  account_managers_h1.style.background = "var(--blue-regular)";
  account_managers_h1.style.opacity = "1";
  account_managers_h1.style.color = "rgb(255, 255, 255)";
  document.querySelectorAll(".account-manager").forEach((items, index) => {
    items.style.display = "unset";
  });
}

function CoFounders(e) {
  teams_h1.forEach(updateTeams)
  cofounders_h1.style.background = "var(--blue-regular)";
  cofounders_h1.style.opacity = "1";
  cofounders_h1.style.color = "rgb(255, 255, 255)";
  document.querySelectorAll(".co-founders").forEach((items, index) => {
    items.style.display = "unset";
  });
}


// BIOGRAPHY SECTION
var background_blur = document.querySelector(".background-blur");
var biography_container = document.querySelector(".biography-container");
var biography_selfie = document.querySelector(".biography-left img");
var biography_name = document.querySelector(".biography-left h1");
var biography_title = document.querySelector(".biography-left p");
var biography_description = document.querySelector(".biography-right p");
function biographyExitButton () {
  background_blur.style.opacity = 0;
  background_blur.style.zIndex = -1;
  biography_container.style.opacity = 0;
  biography_container.style.zIndex = -1;
  document.body.classList.remove("stop-scrolling");
}
function revealBiography () {
  background_blur.style.opacity = 1;
  background_blur.style.zIndex = 999;
  biography_container.style.opacity = 1;
  biography_container.style.zIndex = 1000;
  document.body.classList.add("stop-scrolling");
}
// CO FOUNDERS
function lingshanZhang() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/860622734866645002/unknown.png";
  biography_name.innerHTML = "Ling Shan Zhang";
  biography_title.innerHTML = "Co-founder of BrightBearsInfo";
  biography_description.innerHTML = "Hello, my name is Ling Shan, and I am currently a grade 12 student who attends Sir John A Macdonald Collegiate Institute. My favourite things to do are to drink bubble tea and laugh with my friends in my free time. During the start of quarantine, I decided to co-found BrightBearsInfo alongside Saakshi as I too felt that I was the odd duck in the pond and had no idea what I wanted to pursue or what I was passionate about. I noticed a consistent problem that impacted not only my high school community but rather thousands of youth worldwide.";
  revealBiography();
}
function saakshiJaju() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/860622613662531604/unknown.png";
  biography_name.innerHTML = "Saakshi Jaju";
  biography_title.innerHTML = "Co-founder of BrightBearsInfo";
  biography_description.innerHTML = "Hello! My name is Saakshi Jaju and I am a senior at Sir John A MacDonald C.I. In my free time, you can find me drawing, dancing, jamming to music, or binging tv shows. As to why I started BrightBearsInfo. I found there was a lack of connectivity between opportunities for youth. Whenever I wanted to find opportunities to apply to, I couldn't find anything that would suit my interests/passions and it was time consuming. Hence I decided to start an online platform where students can easily find opportunities and resources to help them with career exploration.";
  revealBiography();
}
// COMMUNICATIONS
function vaishnaviJosyula() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/879714203064205372/unknown.png";
  biography_name.innerHTML = "Vaishnavi Josyula";
  biography_title.innerHTML = "Head of Communications";
  biography_description.innerHTML = "Hey guys! My name is Vaishu. I am a grade 10 student in John Fraser. I joined BBI because I knew it would be a great platform to meet new people, engage with the community, and provide opportunities to high school students during these tough times. My hobbies include singing, making tiktoks, and hanging out with my friends. You can identify me anywhere with my loud and talkative mouth :)";
  revealBiography();
}
function youyouWu() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858883430547718154/unknown.png";
  biography_name.innerHTML = "YouYou Wu";
  biography_title.innerHTML = "Communications";
  biography_description.innerHTML = "YouYou is currently a grade eleven student enrolled in Sir John A. MacDonald Collegiate Institute. She is a responsible student who fulfils the duties assigned to her. She often spends her free time watching anime and drawing. YouYou joined BBI because she was impressed with the work established by the fellow members and wanted to help out her friends.";
  revealBiography();
}
function saumyaSharma() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/862361623331471430/unknown.png";
  biography_name.innerHTML = "Saumya Sharma";
  biography_title.innerHTML = "Communications";
  biography_description.innerHTML = "Saumya is a grade 9 student in Cameron Heights C.I. She loves swimming, playing badminton, spending time with her family and reading! She joined BrightBearsInfo because she loved the initiative that BrightBearsInfo was taking. She also wanted to help students like her find amazing opportunities dedicated to youth, especially during Covid!";
  revealBiography();
}
function ihitaGhosh() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858883672904040468/unknown.png";
  biography_name.innerHTML = "Ihita Ghosh";
  biography_title.innerHTML = "Communications";
  biography_description.innerHTML = "Ihita is a sophomore at Ardrey Kell High School. She loves to play basketball. She joined BBI because she saw an opportunity to help people and so she decided to take it. Ihita has really enjoyed working with the team so far!";
  revealBiography();
}
function avin() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952082267923152956/unknown.png";
  biography_name.innerHTML = "Avin";
  biography_title.innerHTML = "Communications";
  biography_description.innerHTML = "Avin Sharma is a Grade 10 student at Sir Wilfrid Laurier CI. He is interested in STEM and research. He joined Bright Bears to help students find opportunities and discover their passions.";
  revealBiography();
}
function peterDani() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/954033869898801202/unknown.png";
  biography_name.innerHTML = "Peter Dani";
  biography_title.innerHTML = "Communications";
  biography_description.innerHTML = "Peter is a determined first-year student currently attending the University of Western Ontario for Medical Sciences. With his passion and dedication for providing support to others, he joined BBI in pursuit of helping young students explore their passions and interests. His hobbies include playing electric guitar, fencing and tai chi.";
  revealBiography();
}
// DIGITAL MEDIA
function maryZhao() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858886823397031976/unknown.png";
  biography_name.innerHTML = "Mary Zhao";
  biography_title.innerHTML = "Head of Digital Media";
  biography_description.innerHTML = "Mary is a Grade 11 student from Toronto, Canada. She joined BrightBearsInfo in hopes of helping high school students find opportunities. In her free time, she likes to read and play video games.";
  revealBiography();
}
function jadonWong() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858887184576151582/unknown.png";
  biography_name.innerHTML = "Jaden Wong";
  biography_title.innerHTML = "Digital Media";
  biography_description.innerHTML = "Jaden is in grade 11 and a student at Unionville High School. She is hard-working and creative and loves spending time with her family. Jaden recently joined BrightBearsInfo to help guide others with their interests by providing info on opportunities and to improve her graphic design skills. A fun fact about her is that she spends most of her day reading or watching Netflix.";
  revealBiography();
}
function ireneWang() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858887296942211102/unknown.png";
  biography_name.innerHTML = "Irene Wang";
  biography_title.innerHTML = "Digital Media";
  biography_description.innerHTML = "Irene is a Grade 11 student at Richmond Hill High School. Her favorite subjects are Math and Physics. She is dedicated, organized, and a little shy. She joined the Digital Media team of BBI as she enjoys doing graphic designs, and desires to help youth seeking opportunities and resources that benefit their future!";
  revealBiography();
}
function susanSun() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/860176498271191090/unknown.png";
  biography_name.innerHTML = "Susan Sun";
  biography_title.innerHTML = "Digital Media";
  biography_description.innerHTML = "Susan is currently a Grade 11 student who enjoys Chemistry and Physics. She joined BBI to find opportunities that can inspire both herself and others in what they’re passionate about. In her free time, she usually reads, watches anime, or plays Genshin Impact.";
  revealBiography();
}
function chantalLee() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858887429183111188/unknown.png";
  biography_name.innerHTML = "Chantal Lee";
  biography_title.innerHTML = "Digital Media";
  biography_description.innerHTML = "Chantal is a grade 11 IB student currently studying at Richmond Secondary School. When she is not struggling with the suffocating workload from school, you can find her curled up on her couch with a good book, binging the newest anime series she discovered, singing to whatever music that's on her playlist or grabbing bubble tea with her friends. Chantal joined BBI to contribute to her community and bring opportunities to light for other youths.";
  revealBiography();
}
// OUTREACH
function harini() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858885222417563668/unknown.png";
  biography_name.innerHTML = "Harini";
  biography_title.innerHTML = "Head of Outreach";
  biography_description.innerHTML = "No Description";
  revealBiography();
}
function krishantiniJagadeesMalathi() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952082716210384906/unknown.png";
  biography_name.innerHTML = "Krishantini Malathi";
  biography_title.innerHTML = "Outreach";
  biography_description.innerHTML = "Meet Krishantini who is currently a grade 10 IB student at Glenforest Secondary School. She joined BBI in hopes of engaging in a platform to learn new skills, gain experience, meet like-minded people, and most importantly, aid youth like herself in their prominent struggle of navigating the paths of life and transitioning from youth to adulthood. Her hobbies include playing the violin, reading fantasies and thrillers, photography, playing badminton and spending time outdoors - she loves travelling; especially road trips!";
  revealBiography();
}
function jenniferKumar() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952304309226319902/unknown.png";
  biography_name.innerHTML = "Jennifer Kumar";
  biography_title.innerHTML = "Outreach";
  biography_description.innerHTML = "Jen (she/her) is a student in the medical sciences program at Western University! She joined BBI in hopes to help many students as she was once in their position. Being a part of BBI, she hopes to gain knowledge, skills and experiences in leadership, problem-solving, and group development and management. In her free time, Jen likes to learn different dance choreographies and different languages and do research about topics she finds interesting! A fun fact about her is that she likes mentorship and is currently a science academic orientation leader (kind of like a science mentor), in charger of 23 first-year students at Western!";
  revealBiography();
}
// RESEARCH
function faithZou() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858890575032877074/unknown.png";
  biography_name.innerHTML = "Faith Zou";
  biography_title.innerHTML = "Head of Research";
  biography_description.innerHTML = "Faith is a Grade 11 student from Toronto who has a positive attitude and enjoys helping other people. She is excited to be part of the Research team of BBI to learn and share with youth the many valuable opportunities and insights out there. Some of Faith's hobbies include music, baking, and reading. A fun fact about her is that she loves using the Notes app on her phone.";
  revealBiography();
}
function palviChahal() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952099826101780480/unknown.png";
  biography_name.innerHTML = "Palvi Chahal";
  biography_title.innerHTML = "Research";
  biography_description.innerHTML = "Palvi is currently a sophomore in high school. She is one of the researchers. She joined BBI because she found their goal of helping students with resources really interesting, and didn’t want to miss the opportunity. Some of her hobbies include doing arts and crafts, listening to music, and cooking! She’s looking forward to working with an amazing team!";
  revealBiography();
}
function jiayiDeng() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858884372131086356/unknown.png";
  biography_name.innerHTML = "Jiayi Deng";
  biography_title.innerHTML = "Research";
  biography_description.innerHTML = "Jia Yi is currently in her second year studying at Western University. She joined BBI to aid in helping youth explore careers and discover their passions.";
  revealBiography();
}
// CONTENT CREATORS
function radhaPatel() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858891391169986580/unknown.png";
  biography_name.innerHTML = "Radha Patel";
  biography_title.innerHTML = "Content Creator";
  biography_description.innerHTML = "Radha is a grade 10 student and one of the content creators at BBI. She joined the organization to help others explore their interests by connecting them with experts and providing useful resources. She loves to spend her free time reading and watching shows.";
  revealBiography();
}
function anushaRay() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952096013236191292/unknown.png";
  biography_name.innerHTML = "Anusha Ray";
  biography_title.innerHTML = "Content Creator";
  biography_description.innerHTML = "Anusha is currently a high school student who has an outgoing and bubbly personality. She loves spending quality time with friends & family, swimming, cooking and travelling! She joined BrightBearsInfo because of her passion towards advocating for teens like herself. She hopes to be a part of the great change that BBI creates!";
  revealBiography();
}
function kaviKapoor() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858891703833329704/unknown.png";
  biography_name.innerHTML = "Kavi Kapoor";
  biography_title.innerHTML = "Head of Content Creating";
  biography_description.innerHTML = "Kavi is a grade nine student. She loves socializing, filming and dancing. She is a sweet, caring and approachable person. She joined BBI because she wants to help out students like herself. Her fun time activity is making TikToks. She is highly active on social media.";
  revealBiography();
}
// MARKETING
function danLi() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952100074173898752/unknown.png";
  biography_name.innerHTML = "Dan Li";
  biography_title.innerHTML = "Head of Marketing";
  biography_description.innerHTML = "Dan is a Grade 12 student from North York. He is an ambitious, innovative, and conscientious individual. He joined BBI to network, collaborate, and establish future business connections. Fun fact about him is that he once biked to Niagara Falls!";
  revealBiography();
}
function daneezAhmed() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952305140407369768/unknown.png";
  biography_name.innerHTML = "Daneez Ahmed";
  biography_title.innerHTML = "Marketing";
  biography_description.innerHTML = "Daneez is a part of BBI’s marketing team in hopes of informing others about career opportunities. She is a grade ten student who enjoys reading and singing. A fun fact about Daneez is that she has rode an elephant!";
  revealBiography();
}
function debraLam() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952100819136839720/unknown.png";
  biography_name.innerHTML = "Debra Lam";
  biography_title.innerHTML = "Marketing";
  biography_description.innerHTML = "Debra is a cheerful grade ten student. She loves dancing, playing video games, drawing and so many more. She is kind and a hardworking person. She joined BBI because she wanted to help student realized more about their passionate dream jobs. A fun fact about her is that she spends most of her days drawing or socializing around her friends.";
  revealBiography();
}
function mahroshZafar() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952082887937781851/unknown.png";
  biography_name.innerHTML = "Mahrosh Zafar";
  biography_title.innerHTML = "Marketing";
  biography_description.innerHTML = "Mahrosh is a hard working, determined and responsible grade 11 student from Mississauga, Ontario. She joined Bright Bears Info because she is passionate about helping youth explore different career pathways and gaining a variety of opportunities. BBI helped her a lot when she was doing course selection for grade 12. Some of her hobbies include sewing, cooking, and baking.";
  revealBiography();
}
function yaldaNikookar() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952100248719863818/unknown.png";
  biography_name.innerHTML = "Yalda Nikookar";
  biography_title.innerHTML = "VP of Marketing";
  biography_description.innerHTML = "Yalda is a grade 10 student in Ontario, Canada. In her free time, she enjoys going on walks, hanging out with friends, and reading. She joined BrightBearsInfo to support youth by connecting them to opportunities and providing information about post-secondary options. She is very excited to work for the BrightBearsInfo team!";
  revealBiography();
}
// ACCOUNT MANAGERS
function krupaPatel() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/858887878288867358/unknown.png";
  biography_name.innerHTML = "Krupa Patel";
  biography_title.innerHTML = "Account Manager";
  biography_description.innerHTML = "Hi everyone! My name is Krupa and I'm in Gr. 9! I attend Central Peel SS. in Brampton. Something cool about me is that I play the guitar and my favourite subject is English! I've always had a passion of helping others and that's why I joined BBI!";
  revealBiography();
}
function joyLi() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/952100644750262272/unknown.png";
  biography_name.innerHTML = "Joy Li";
  biography_title.innerHTML = "Account Managing";
  biography_description.innerHTML = "Joy is a creative and curious person that loves to try new things and travel to different places around the world. She is in grade 12 and chose to join BrightBearsInfo because it inspired her to want to help others who might be just as curious as her. Joy believes that by joining this organization, it will help her grow and learn more from the experience. One fun (very random) fact about Joy is that she can sing the alphabet backwards :D.";
  revealBiography();
}
// WEB DEV
function tejeshArujuna() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/859227556766810132/unknown.png";
  biography_name.innerHTML = "Tejesh Arujuna";
  biography_title.innerHTML = "Web Dev";
  biography_description.innerHTML = "Tejesh is an energetic grade 11 student from Toronto. He spends his time finding ways to cure his boredom. Some of his favourite ways to do this include playing music, talking to friends, and being bad at League of Legends. Tejesh joined BBI to help students explore various career paths and interests, while also improving his web dev skills.";
  revealBiography();
}
function tonyQiu() {
  biography_selfie.src = "https://media.discordapp.net/attachments/715319623637270638/858114597567070208/unknown.png";
  biography_name.innerHTML = "Tony Qiu";
  biography_title.innerHTML = "Head of Web Dev";
  biography_description.innerHTML = "Tony is a grade 11 student from Scarborough. He is an extraordinarily competitive kid that wants to be as prepared as possible for the rapidly changing modern workplace. He joined BBI so he could create bigger projects with others. He is hard working, ambitious and hungry for his spot in the coding industry. Fun fact about him is that he is left handed!";
  revealBiography();
}
function davidLu() {
  biography_selfie.src = "https://cdn.discordapp.com/attachments/715319623637270638/879845593860685844/unknown.png";
  biography_name.innerHTML = "David Lu";
  biography_title.innerHTML = "Web Dev";
  biography_description.innerHTML = "No Description.";
  revealBiography();
}


// TOGGLE BURGER
var burger = document.querySelector(".burger");
var burger_exit = document.querySelector(".burger-exit");
var nav_links = document.querySelector('.nav-links');
burger.addEventListener('click', function() {
  nav_links.classList.toggle('nav-links-activate');
})
burger_exit.addEventListener('click', function() {
  nav_links.classList.toggle('nav-links-activate');
})