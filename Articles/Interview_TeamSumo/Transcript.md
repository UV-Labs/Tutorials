#### Before driving into the hackathon that you just [won](https://www.linkedin.com/posts/manojna-vinjamuri-25767320a_won-womantechies-activity-6949315014180626432-cULi?utm_source=linkedin_share&utm_medium=member_desktop_web) we would like to know a little bit more about yourself and specially the side which is not related to work or coding

Susmit:
Hi! I am Susmit Singh, I just finished my sophomore year at VIT Vellore. My major is “Computer Science” and my specialisation is “Business Systems”. When I am not coding, I am either watching/reading anything and everything horror. I am also really interested in business and finance although it's a work in progress.

Manojna:
I am Manojna, a 3rd-year student studying computer science specialising in the business systems branch in VIT Vellore. I am from a medium town Tanuku from, Andhra Pradesh. Apart from college and coding, I have been very interested in art since childhood. This interest made me try different arts like painting, singing and dancing. Among these, I fell in love with dance and focused on it. Now I am a Kuchipudi(classical dance of Andhra) dancer. I try different forms of dance, and yes, you may have guessed, I am also part of the dance club of VIT.

---

#### Could you share with us the inspiration for this idea.

Manojna:
My teammate recently did a fundraiser using the crowd-funding platform “Go Fund Me” for the surgery of his dog. We were also learning web3 side by side. So we were able to discover some problems with the current system of fund-raising. There was no transparency of donations, and once the goal was acquired, the entire funds were released to him, which left the donors having 0 control over their own money. 
So we sat down, ideated, researched and came up with our problem statement.

---
#### Assuming I'm a 5 year old and the only thing that I know is the English language, can you explain your distributed application to me.
Susmit:
Suppose your class teacher gives a whole bunch of chocolates to a kid in your class and told him to give five chocolates to everyone in your class. Now either that kid can be honest and give everyone 5 chocolates or that kid, being naughty, can give everyone 4 and keep a lot of chocolates to himself. Now imagine, if your class teacher told everyone about the chocolates, the kid she’s giving the chocolates to and how many chocolates each kid should get. Which situation would you prefer? Most people would prefer the second one, cause everyone knows about everything and no kid can steal chocolates for himself.

Similarly, DApp (Decentralized Applications) informs everyone about everything that is happening on the app. It’s completely transparent, therefore everyone is loving it.

--- 
#### But that being done, can you explain the technical aspects of the application (now for the more wider audience).
Manojna:
So DApps are empowered by blockchains. 
Blockchain is nothing but a collection of people, each having a ledger where every single transaction that has happened is recorded. Again, this is extremely simplified. Whenever any new transaction happens, every single ledger is updated, and then its value is cross-checked with other ledgers to ensure the authenticity of the transaction. This is the reason why faking a transaction on the blockchain is extremely difficult (almost impossible).

So, as I said, DApps are powered by blockchains. I’ll give an example of my application. 

Crowdsourcing applications face three major problems as we identified:
Too much dependence on the central managing authority.
Donors have no control over what happens with their donated money.
No record of transactions, either inflowing or outflowing.

So using our DApp, users can create their own campaigns, and anyone can donate to them. We solve the above problems by:
The money is not held by the manager, but by the smart contract. The manager has absolutely 0 control over the money accumulated in the smart contract.
The manager can’t make a transaction with the money accumulated, but rather they’ll have to create a request for the transaction. The manager will have to provide the justification, receiver’s address and transaction amount. If more than 50% of donors vote YES, then only the manager will be allowed to finalize the transaction.
The smart contract maintains a list of all the transactions which are coming in OR going out of the smart contract, align with all the necessary data.

BONUS: All of this data is on a blockchain, we don’t even have a backend + database.

---
#### What were the difficulties that you faced in building this application on blockchain.
Susmit:
We just faced one major difficulty, “Keeping a track of all the transactions”. We tried solving it using a plethora of ways:
Storing the hash of transactions and later retrieving them by searching the blockchain through an API like etherScan.
Storing all the details about the transaction and only showing what's necessary.
Managing the transaction information independently inside of the smart contract.

Based on time and space(money) constraints we decided to go with the third option. We have created several data structures inside of the smart contract itself to store the necessary transaction information.

---
#### What were the solutions to the difficulties mentioned above
Susmit:
As mentioned, we have several data structures eg. structs, mappings etc. which manage and store the relevant transaction information. Transaction information, (inflow/outflow) can easily be extracted from them. These algorithms for extraction have been optimized to make sure, we are using the lowest time and computing power possible.

---
#### Did you expect that you will win the hackathon, specifically the first position.
Manojna:
This was our first hackathon, our goal was to build a complete working product that we envisioned. We didn’t expect to win anything. But luckily we did! 
Since this, we have won 2 additional hackathons, Bajaj’s hackathon and another web3.0 hackathon.

---
#### What is the road map for the application ahead
Manojna:
Some optimizations and changes to the code of the application were done since the hackathon, but right now we don't have anything planned for our DApp. Although we are planning to think tank and add some new features to it.

---
#### What are the key learning achieved/received/gained, that you would like to share with other developers in the web3 space.
Susmit:
We have learnt that web3 in itself, although powerful is still extremely restrictive. The Smart Contracts must be minimal and lightweight to reduce Wei spent per transaction. We found that integrating conventional centralized technology can enhance the power of DApps multifold. All the mindless processing, supporting data storage, everything can be moved to a conventional backend, while the data democracy can be achieved with the help of DApp.

So, I’d advise the new developers in web3 to consider conventional centralized technology as their ally, not as their enemy.

---
#### What learning sources/resources did you refer to, or you would refer to other developers for being able to build applications of similar nature in the future
Manojna:
We used crypto zombies to learn solidity and a whole bunch of youtube videos to practise it. We ricocheted our idea off some experienced web3 developers to get their feedback and further tweak it.
I’ll attach a list of resources we used for the hackathon:
https://www.youtube.com/watch?v=M576WGiDBdQ&ab_channel=freeCodeCamp.org
https://www.youtube.com/watch?v=ipwxYa-F1uY&ab_channel=freeCodeCamp.org
https://www.youtube.com/watch?v=gsaapL1SEqg&list=PLgPmWS2dQHW9u6IXZq5t5GMQTpW7JL33i&ab_channel=CodeEater
https://www.youtube.com/watch?v=Wn_Kb3MR_cU&ab_channel=JavaScriptMastery
https://cryptozombies.io/
