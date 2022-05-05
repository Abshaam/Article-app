import pic1 from "./images/youtubers.jpg"
import pic2 from "./images/volunteerReact.png"
import pic3 from "./images/yandex.webp"
import pic4 from "./images/iphonecuts.webp"
import pic5 from "./images/bhara.webp"
import pic6 from "./images/vedantu.webp"
import pic7 from "./images/wedding.webp"
import pic8 from "./images/queen.webp"
import pic9 from "./images/tiktok.webp"


let articles = [
    {
        id: 1,
        src: <img src={pic1} alt=''/>, 
        title: 'The YouTubers who blew the whistle on an anti-vax plot',
        author: "Charlie Haynes and Flora Carmichael",
        description: 'A mysterious marketing agency secretly offered to pay social media stars to spread disinformation about Covid-19 vaccines. Their plan failed when the influencers went public about the attempt to recruit them."It started with an email" says Mirko Drotschmann, a German YouTuber and journalist.Mirko normally ignores offers from brands asking him to advertise their products to his more than 1.5 million subscribers. But the sponsorship offer he received in May this year was unlike any other.An influencer marketing agency called Fazze offered to pay him to promote what it said was leaked information that suggested the death rate among people who had the Pfizer vaccine was almost three times that of the AstraZeneca jab.The information provided was not true.It quickly became apparent to Mirko that he was being asked to spread disinformation to undermine public confidence in vaccines in the middle of a pandemic.'
      
    },
    {
      id: 2,
      src: <img src={pic2} alt=''/>,
      title: "Covid-19: How did a volunteer panel react when we showed them an anti-vax video?",
      author: "Marianna Spring, Specialist disinformation reporter, BBC News",
      description: "Activists have been targeting people with fears about vaccines in a social media blitz. In an experiment, BBC Panorama showed a panel one video filled with falsehoods to see how it affected their willingness to get a jab.In a sleepy suburb of Norwich, 83-year-old Rosemary opens a WhatsApp message from a relative. It contains a video called Ask the Experts.The clip features people with impressive medical and scientific titles based in the UK, US, Spain and Sweden.Some allege, contrary to the evidence, that Covid-19 vaccines are unsafe, that they can alter a person's DNA - and even that the pandemic is somehow not real.Rosemary is frightened - and suddenly unsure about whether she'll get vaccinated.",
    },
    {
      id: 3,
      src: <img src={pic3} alt=''/>,
      title: "Smartphone users' data could be at risk due to app software developed by Russia's largest internet firm,",
      author: 'TEFANO RELLANDINI',
      description: "Smartphone users could be at risk of being tracked by Russian authorities due to app software created by the country's largest internet firm, the Financial Times reported on Tuesday. Yandex's software development kit, or SDK, called AppMetrica lets developers create apps for devices running on Apple's iOS and Google's Android's systems, the outlet reported. AppMetrica collects user data that is sent to servers in Finland and Russia, the latter of which, experts told the FT, could potentially be accessed by the Kremlin to track individuals. The paper reported that games, VPNs and messaging applications are among the apps that have AppMetrica installed. Yandex, sometimes referred to as Russia's version of Google, has come under close scrutiny following Moscow's invasion of Ukraine. The internet giant has been accused of censoring news from Ukraine, and the company's former head of news has urged his ex-colleagues to quit over the firm's role in potentially aiding censorship. Western sanctions levied against Russia have triggered the resignation of several of its board members.",
    },
    {
      id: 4,
      src: <img src={pic4} alt=''/>,
      title: "10 Things in Tech: Apple cuts production",
      author: 'JORDAN PARKER ERB',
      description: "It's good to see you here. Apple is cutting production of a few products, and we're explaining how much money Elon Musk and Jeff Bezos could owe under Biden's new tax proposal (it's a lot). Apple is going to cut production of iPhones and AirPods. According to Nikkei, the tech giant will make fewer AirPods and iPhone SEs next quarter, in anticipation of lower demand brought on by inflation and the crisis in Ukraine. ",
    },
    {
      id: 5,
      src: <img src={pic5} alt=''/>,
      title: 'Ashneer Grover claims Bharatpes gold loan vertical was his project, calls out CEO for ‘selling lies’ ',
      author: "Kritti Bhalla ",
      description: "BharatPe’s former founder, managing director and chief executive (CEO) Ashneer Grover has accused the merchant payments platform’s latest CEO Suhail Sameer for taking credit for the gold loan vertical Grover had launched.Grover has mentioned that he has hired Nikhilesh Govil, the head of BharatPe’s gold loan division, nearly a year ago, in order to launch and scale up this vertical. He has further claimed that the vertical was launched by him and Nikhilesh six months back, and expanded to three cities — Delhi, Bengaluru and Hyderabad.",
    },

    {
        id: 6,
        src: <img src={pic6} alt=''/>,
        title: 'How this former Vedantu cofounder is taking on Instagram and Snapchat to build social media for teens',
        author: "Kritti Bhalla",
        description: "After spending nearly seven years building one of India’s biggest edtech companies, Vedantu, Saurabh Saxena is now on a journey to take on social media platforms like Instagram and Snapchat by building an offering exclusively for teens. His latest venture Uable had started off as an online life skill development platform for kids aged 6-12 in 2020. The company had also raised close to $5 million from marquee investors like 3one4 Capital, Inflection Point, Pine Labs’ Amrish Rau and others. Saxena claims that the other model was working just fine, both parents and students enjoyed their method of skill development in a creative manner. Saxena’s seven-year-old daughter was also a user of the platform. However, Uable decided to pivot its business model to focus on a much larger audience. This switch in model was one of the reasons why Chiratae Ventures had decided to back the company in the first place.",
      },

    {
      id: 7,
      src: <img src={pic7} alt=''/>,
      title: "A wedding photographer spoke out against a bride who she says offered her a trip to Cancun instead of money",
      author: "SAMANTHA GRINDELL",
      description: "A wedding photographer is speaking out after she said a bride asked her to shoot her destination wedding, but only offered her a free stay — and no money — to do it. AJ Abelman, 31, a wedding photographer based in Chicago, Illinois, has owned her own business for six years, and is used to traveling all over the country for her work. But recently, she got a request regarding a destination wedding that made her blood boil, Abelman said in a TikTok video from February 24."
    },

    {
      id: 8,
      src: <img src={pic8} alt=''/>,
      title: "Why the Queen and other royals honored Prince Philip with green clothing instead of black at his memorial service",
      author: "MARIA NOYEN",
      description: "The Queen and several other royals seemingly paid tribute to Prince Philip by wearing green outfits to his Westminster Abbey memorial service on Tuesday, which took place nearly a year after his death. The memorial was the first major official engagement Queen Elizabeth II attended since October of 2021, as Sky News reported, and came just over a month since she tested positive for COVID-19. She was escorted from her residence in Windsor Castle to the abbey by Prince Andrew during the BBC's live broadcast of the service, where viewers got a first glimpse of her emerald coatdress.The shade evoked Philip's official livery color of Edinburgh Green, the Independent reported. The duke's page wore a similar dark green shade during Philip's coronation and for his funeral on April 17, 2021, a specially adapted Land Rover hearse was painted the same color."
    },

    {
      id: 9,
      src: <img src={pic9} alt=''/>,
      title: "How much money TikTokers make, according to creators",
      author: "DAN WHATELEY",
      description: "TikTok ushered in a new generation of digital stars. But for many creators, it can be difficult to make money from TikTok alone. Unlike YouTube or Facebook, which split a percentage of ad revenue with qualifying users, TikTok doesn't share ad dollars with influencers. Instead, it has several built-in monetization tools like virtual gifts, as well as a Creator Fund to pay users with at least 10,000 followers and 100,000 views in a 30-day period for their videos. While Creator Fund payments aren't calculated based on just views, the effective payouts for videos have amounted to a few pennies for every one thousand video plays, some TikTokers told Insider. Top TikTok creators like Hank Green and MrBeast have spoken out about the low payouts, with Green revealing in a January YouTube video that he was paid what amounted to between $0.02 and $0.03 for every one thousand views on TikTok. Personal finance influencer Preston Seo, who now has 2.1 million TikTok followers, earned a total of about $1,664 from the Creator Fund between January 2021 to May 2021, according to documentation he shared with Insider. His TikTok account earns between $9 to $38 a day on average."
    }
  ];
  
  export function getArticles() {
    return articles;
  }

  export  function getData(identify) {
    return(
      articles.find( article => article.id === identify)
    )
  }

let comments =[
  {
    id:1,
    name: "Ushama",
    message: "I am all cleared up after reading this article, great work!!"
  },

  {
    id:2,
    name: "Richeal",
    message: "Detailed infomation shared in this article. Thank you"
  },

  {
    id:3,
    name: "Richelle",
    message: "I clearly understand the rumour that has being going on. Nice"
  },

  {
    id:4,
    name: "Kristine",
    message: "I was quiet looking for more insights in this issue. Thank you"
  }

]

export function getComments() {
  return(
    comments
  )
}

export  function getDat(identity) {
  return(
    comments.find( comment => comment.id === identity)
  )
}