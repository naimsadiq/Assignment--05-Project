
### ৬. নিম্নলিখিত প্রশ্নগুলির স্পষ্ট উত্তর দেওয়া হয়েছে:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: getElementById = একটি 'id' দিয়ে নির্দিষ্ট এলিমেন্ট খুজে বের করা হয়। আর এটি একটি এলিমেন্ট কে রিটার্ন করে। এবং 'id' দিয়ে কোন এলিমেন্ট কে খুজে পাওয়া না যায় তাহলে null রিটার্ন করবে। 
        getElementsByClassName = একটি 'class' দিয়ে একাধিক এলিমেন্ট কে খুজে বের করা হয়। এবং এটি একাধিক এলিমেন্ট কে array এর মত html collection রিটার্ন করে। আর 'class' দিয়ে কোন এলিমেন্ট কে খুজে পাওয়া না যায় তাহলে খালি html collection রিটার্ন করবে। 
        querySelector = সব ধরনের সিলেক্টর দিয়ে নির্দিষ্ট এলিমেন্ট খুজে বের করা হয়। tag বা class দিয়ে খুজলে একাধিক এলিমেন্ট থাকলেও প্রথম যেই এলিমেন্ট থাকবে সেটাকে রিটার্ন করবে। এবং সিলেক্টর দিয়ে কোন এলিমেন্ট কে খুজে পাওয়া না যায় তাহলে null রিটার্ন করবে। 
        querySelectorAll = সব ধরনের সিলেক্টর দিয়ে একাধিক এলিমেন্ট খুজে বের করা হয়। এবং এটি একাধিক এলিমেন্ট কে array এর মত nodelist রিটার্ন করে। আর সিলেক্টর দিয়ে কোন এলিমেন্ট কে খুজে পাওয়া না যায় তাহলে খালি nodelist রিটার্ন করবে। 
2. How do you **create and insert a new element into the DOM**?
Answer: document.createElement দিয়ে নতুন এলিমেন্ট তৈরি করা হয়, এবং .innerText, .innerhtml দিয়ে নতুন এলিমেন্ট এর ভেতর কন্টেন্ট যোগ করা হয়। আর parent.appendChild() ব্যবহার করে parent এর ভেতর insert করা হয়। 
3. What is **Event Bubbling** and how does it work?
Amswer: যদি কোনো element এ event ঘটে (যেমন click), তবে সেই event প্রথমে ওই child element এ ট্রিগার হয়, এরপর তার parent element, তারপর grandparent element, এভাবে document পর্যন্ত পৌঁছে যায়।
4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: child element গুলোতে আলাদা আলাদা event listener না ব্যবহার করে, parent element এ একটাই event listener বসিয়ে, সব child এর event manage করা হলো Event Delegation। এবং নতুন child element তৈরি করলেও আলাদা ভাবে event listener যোগ করতে হয় না।  
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: preventDefault() = যেসব এলিমেন্ট এ event listener যোগ করলে default কোন কাজ করে। যেমন 'reload' নেই, তখন ডিফল্ট কাজ কে বন্ধ করতে এই methods ব্যবহার হয়। 
        stopPropagation() = এলিমেন্ট এ event listener যোগ করলে যেই Bubbling হয়। সেটা কে বন্ধ করতে এই methods ব্যবহার হয়। 
