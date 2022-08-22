# marginCalculator
a website to calculate margin,loss and profit for trades(crypto market,FOREX,etc..) 

# usage 

let's say you want to open a short poisiton

![alt text](https://github.com/slotfi909/marginCalculator/blob/main/images/img1.png?raw=true)

now,you may want to know what this position will cost you(whether it hit target price or stoploss)

all you need to do is to plug the numbers into the site and it will tell you all the details you'll need from this position

![Screenshot (41)](https://user-images.githubusercontent.com/82094903/185901203-6f03e17b-b662-4b1e-9c08-0ff8a16264bb.png)
<details>
<summary>for further information about the inputs click here</summary>
<pre>
total: the total amount of money deposited in your account
specifiedMoney:the amount of money you want to specify to this position
(e.g. if you have 300$ in total and you want to open 2 positions, you may want to specify a maximum of 150$ to each of them)
risk: risk(percentage)
reward: reward(percentage)
leverage: position's leverage
fraction: the fraction of your total money that you're willing to risk
(e.g. if you have 1000$ and you put 7 as your fraction input, if your position hit an stoploss, you'll lose 1000/7=142.85$ in that position)
</pre>
</details>

you can change the numbers, see the different results, and go with the one which suits your risk management strategies best.
by clicking the "submit" button, it will automatically save the input values in your dataset using object-oriented mysqli, but to use it, first you have to make some changes in the php file and add your own sql server address,username and password of the database,etc...

hope it'll help.


