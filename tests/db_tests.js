process.env.NODE_ENV = "test";
const tape = require("tape");
const runDbBuild = require("../src/database/db_build.js");
const queries = require("../src/queries/index");
const articles = [
  {article_id:1,
    user_id: 1,
    title: "nuclear arms deal party",
    description:
      "contravertial superstar Nikolas Abdolhamid Yohanen Gonsales Robotosky is making a new party in Maiami , sources say its THE BOMB",
    pic_url: null
  },
  {article_id:2,
    user_id: 1,
    title:
      "General election 2019: Labour’s four-day week ‘to cost taxpayers £17bn",
    description:
      "Jeremy Corbyn’s aim to introduce a four-day working week would cost the taxpayer at least £17 billion a year because of the impact on the public sector wage bill, a new analysis has shown.",
    pic_url:
      "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F6e4e6134-ff54-11e9-89d5-2f6d95957dda.jpg?crop=3036%2C1708%2C0%2C158&resize=685"
  },
  {article_id:3,
    user_id: 2,
    title: "Single? No, I’m a happy self‑partner, says Emma Watson",
    description:
      "She is Emma Watson, and she is not single but self-partnered. She used the expression in an interview in this month’s edition of British Vogue in which she talked about the stress of turning 30 next April.",
    pic_url:
      "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F6be631f4-ffb0-11e9-ac10-05df8e730a81.jpg?crop=2760%2C3450%2C233%2C85&resize=498"
  },
  {article_id:4,
    user_id: 2,
    title: "The Lib Dems are being squeezed out of a two-party contest",
    description:
      "Yes, in 2017 they won 12 seats, four more than they had after their 2015 evisceration. But under Tim Farron their vote share in fact fell by half a percentage point, to 7.4 per cent.The party had never received a smaller slice of the vote since its formation. Even the Liberals, in their unmerged form, had not had so low a share since the 1959",
    pic_url:
      "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Ff69eb42a-ffc3-11e9-a47f-d3b51643f481.jpg?crop=3500%2C2333%2C0%2C0&resize=720"
  },
  {article_id:5,
    user_id: 1,
    title: "Death of prince Karem",
    description:
      "Prince Karem I, the next in line to rule The Kingdom of Sandalia, dies at the young age of 86, flippin` `ell",
    pic_url: null
  }
];

tape("demo test", t => {
  t.deepEqual(1, 1, "1 equal to 1");
  t.end();
});
tape("test all titles", t => {
    runDbBuild();
    const expected=articles.map(e=>{return {title:e.title,article_id:e.article_id}});
  queries.getalltitles((err,res)=>{
        if(err) console.log(err);
        else{
        t.deepEqual(res.rows,expected)
        t.end();
        }

    });
  
  });

  const expected={article_id:6,
    user_id: 1,
    title: "Testing is boring",
    description:
      "we are died in this course",
    pic_url: null
  };
tape("adding to article", t => {
  runDbBuild();
//   const article_id=6;

    queries.addarticle(1,"Testing is boring","we are died in this course",null,(err,res)=>{
        if(err) console.log(err);
        else{
        t.deepEqual(res.rows[0].article_id,expected.article_id,"should be 6")
        t.end();
        }
    })
});
// tape("delete article", t => {
    
//     queries.getbody(6,(err,res)=>{
//         if(err)console.log(err)
//         else{
//             t.deepEqual(res.rows, expected,"should be equal");
//             t.end();
//         }
//     })
// });




process.env.NODE_ENV = "dev";
