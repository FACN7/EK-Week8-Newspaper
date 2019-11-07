const getfirstwithpicpic = (rows) => {
    let i = 0;
    // console.log("rows are :"+ rows[0]);
    let latest = { title: "No posts", article_id: null, pic_url: "https://colorlib.com/wp/wp-content/uploads/sites/2/instagram-image-size.jpg" };
    if(rows.length==0){
        // console.log(latest.pic_url);
        return latest.pic_url;
    }
    while (i < rows.length) {
        if (rows[i].pic_url) {
            latest = { title: rows[i].title, article_id: rows[i].article_id, pic_url: rows[i].pic_url };
            
        }
        i++;
    }
    if(latest.article_id==null){
        return { title: rows[i-1].title, article_id: (i-1), pic_url: "https://colorlib.com/wp/wp-content/uploads/sites/2/instagram-image-size.jpg" }.pic_url;
    }
    return latest.pic_url;
};
const getfirstwithpictitle = (rows) => {
    let i = 0;
    let latest = { title: "No posts", article_id: null, pic_url: "https://colorlib.com/wp/wp-content/uploads/sites/2/instagram-image-size.jpg" };
    if(rows.length==0){
        return latest.title;
    }
    while (i < rows.length) {
        if (rows[i].pic_url) {
            latest = { title: rows[i].title, article_id: rows[i].article_id, pic_url: rows[i].pic_url };
            
        }
        i++;
    }
    if(latest.article_id==null){
        return { title: rows[i-1].title, article_id: (i-1), pic_url: "https://colorlib.com/wp/wp-content/uploads/sites/2/instagram-image-size.jpg" }.title;
    }

    return latest.title;
};

const getfirstwithpicid = (rows) => {
    let i = 0;
    let latest = { title: "No posts", article_id: null, pic_url: "https://colorlib.com/wp/wp-content/uploads/sites/2/instagram-image-size.jpg" };
    if(rows.length==0){
        return latest.id;
    }
    while (i < rows.length) {
        if (rows[i].pic_url) {
            latest = { title: rows[i].title, article_id: rows[i].article_id, pic_url: rows[i].pic_url };
            
        }
        i++;
    }
    if(latest.article_id==null){
        return { title: rows[i-1].title, article_id: (i-1), pic_url: "https://colorlib.com/wp/wp-content/uploads/sites/2/instagram-image-size.jpg" }.id;
    }

    return latest.article_id;
};
module.exports = {
    getfirstwithpicpic,
    getfirstwithpicid,
    getfirstwithpictitle,
};