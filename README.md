# Associative-Arrays
Some problem solutions from my training in Softuni

## **1. Phone Book**

Write a function that stores information about a **person’s name** and
**phone number**. The **input** is an **array of strings** with
space-separated name and number. **Replace duplicate names**. Print the
result as shown.

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['Tim 0834212554',</strong></p>
<p><strong>'Peter 0877547887',</strong></p>
<p><strong>'Bill 0896543112',</strong></p>
<p><strong>'Tim 0876566344']</strong></p></td>
<td><p><strong>Tim -&gt; 0876566344</strong></p>
<p><strong>Peter -&gt; 0877547887</strong></p>
<p><strong>Bill -&gt; 0896543112</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>['George 0552554',</strong></p>
<p><strong>'Peter 087587',</strong></p>
<p><strong>'George 0453112',</strong></p>
<p><strong>'Bill 0845344']</strong></p></td>
<td><p><strong>George -&gt; 0453112</strong></p>
<p><strong>Peter -&gt; 087587</strong></p>
<p><strong>Bill -&gt; 0845344</strong></p></td>
</tr>
</tbody>
</table>

## **2. Meetings**

Write a function that manages meeting appointments. The input comes as
an **array of strings**. Each string contains a **weekday** and person’s
**name**. For each **successful** meeting, **print a message**. If you
receive the **same weekday** twice, the meeting cannot be scheduled so
print a **conflicting message**. In the end, print a list of all
**successful** meetings.

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['Monday Peter',</strong></p>
<p><strong>'Wednesday Bill',</strong></p>
<p><strong>'Monday Tim',</strong></p>
<p><strong>'Friday Tim']</strong></p></td>
<td><p><strong>Scheduled for Monday</strong></p>
<p><strong>Scheduled for Wednesday</strong></p>
<p><strong>Conflict on Monday!</strong></p>
<p><strong>Scheduled for Friday</strong></p>
<p><strong>Monday -&gt; Peter</strong></p>
<p><strong>Wednesday -&gt; Bill</strong></p>
<p><strong>Friday -&gt; Tim</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>['Friday Bob',</strong></p>
<p><strong>'Saturday Ted',</strong></p>
<p><strong>'Monday Bill',</strong></p>
<p><strong>'Monday John',</strong></p>
<p><strong>'Wednesday George']</strong></p></td>
<td><p><strong>Scheduled for Friday</strong></p>
<p><strong>Scheduled for Saturday</strong></p>
<p><strong>Scheduled for Monday</strong></p>
<p><strong>Conflict on Monday!</strong></p>
<p><strong>Scheduled for Wednesday</strong></p>
<p><strong>Friday -&gt; Bob</strong></p>
<p><strong>Saturday -&gt; Ted</strong></p>
<p><strong>Monday -&gt; Bill</strong></p>
<p><strong>Wednesday -&gt; George</strong></p></td>
</tr>
</tbody>
</table>

## **3. Address Book**

Write a function that stores information about a person’s **name** and
his **address**. The input comes as an **array of strings**. Each string
contains the **name** and the **address** separated by a **colon**. If
you receive the same name **twice** just **replace** the address. In the
end, print the full list, **sorted alphabetically** by the person’s
name.

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['Tim:Doe Crossing',</strong></p>
<p><strong>'Bill:Nelson Place',</strong></p>
<p><strong>'Peter:Carlyle Ave',</strong></p>
<p><strong>'Bill:Ornery Rd']</strong></p></td>
<td><p><strong>Bill -&gt; Ornery Rd</strong></p>
<p><strong>Peter -&gt; Carlyle Ave</strong></p>
<p><strong>Tim -&gt; Doe Crossing</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>['Bob:Huxley Rd',</strong></p>
<p><strong>'John:Milwaukee Crossing',</strong></p>
<p><strong>'Peter:Fordem Ave',</strong></p>
<p><strong>'Bob:Redwing Ave',</strong></p>
<p><strong>'George:Mesta Crossing',</strong></p>
<p><strong>'Ted:Gateway Way',</strong></p>
<p><strong>'Bill:Gateway Way',</strong></p>
<p><strong>'John:Grover Rd',</strong></p>
<p><strong>'Peter:Huxley Rd',</strong></p>
<p><strong>'Jeff:Gateway Way',</strong></p>
<p><strong>'Jeff:Huxley Rd']</strong></p></td>
<td><p><strong>Bill -&gt; Gateway Way</strong></p>
<p><strong>Bob -&gt; Redwing Ave</strong></p>
<p><strong>George -&gt; Mesta Crossing</strong></p>
<p><strong>Jeff -&gt; Huxley Rd</strong></p>
<p><strong>John -&gt; Grover Rd</strong></p>
<p><strong>Peter -&gt; Huxley Rd</strong></p>
<p><strong>Ted -&gt; Gateway Way</strong></p></td>
</tr>
</tbody>
</table>

## **4. Storage**

Write a function that takes a certain number of **items** and their
**quantity**. If the same item appears **more than once**, **add the new
amount** to the **existing one**. In the end, print all the items and
their amount without sorting them. The input comes as an **array of
strings**. Try using a **Map()**.

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['tomatoes 10',</strong></p>
<p><strong>'coffee 5',</strong></p>
<p><strong>'olives 100',</strong></p>
<p><strong>'coffee 40']</strong></p></td>
<td><p><strong>tomatoes -&gt; 10</strong></p>
<p><strong>coffee -&gt; 45</strong></p>
<p><strong>olives -&gt; 100</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>['apple 50',</strong></p>
<p><strong>'apple 61',</strong></p>
<p><strong>'coffee 115',</strong></p>
<p><strong>'coffee 40']</strong></p></td>
<td><p><strong>apple -&gt; 111</strong></p>
<p><strong>coffee -&gt; 155</strong></p></td>
</tr>
</tbody>
</table>


## **5. School Grades**

Write a function that stores **students** and their **grades**
throughout the year. If a student appears more than once, **add** the
new **grades** to **existing ones**. Finally, **print** the students and
their **average grades**, sorted **alphabetically** by **student name.**
The input comes as an **array of strings**.

**Note:** The **average grades** must be fixed to the second decimal
place.

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['Lilly 4 6 6 5',</strong></p>
<p><strong>'Tim 5 6',</strong></p>
<p><strong>'Tammy 2 4 3',</strong></p>
<p><strong>'Tim 6 6']</strong></p></td>
<td><p><strong>Lilly: 5.25</strong></p>
<p><strong>Tammy: 3.00</strong></p>
<p><strong>Tim: 5.75</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>['Steven 3 5 6 4',</strong></p>
<p><strong>'George 4 6',</strong></p>
<p><strong>'Tammy 2 5 3',</strong></p>
<p><strong>'Steven 6 3']</strong></p></td>
<td><p><strong>George: 5.00</strong></p>
<p><strong>Steven: 4.50</strong></p>
<p><strong>Tammy: 3.33</strong></p></td>
</tr>
</tbody>
</table>

## **6. Word Occurrences**

Write a function that **counts** the times each **word occurs in a
text**. Print the words **sorted by count in descending** order. The
**input** comes as an **array of strings**.

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]</strong></td>
<td><p><strong>sentence -&gt; 3 times</strong></p>
<p><strong>Here -&gt; 2 times</strong></p>
<p><strong>is -&gt; 2 times</strong></p>
<p><strong>the -&gt; 2 times</strong></p>
<p><strong>first -&gt; 1 times</strong></p>
<p><strong>another -&gt; 1 times</strong></p>
<p><strong>And -&gt; 1 times</strong></p>
<p><strong>finally -&gt; 1 times</strong></p>
<p><strong>third -&gt; 1 times</strong></p></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><strong>["dog", "bye", "city", "dog", "dad", "boys", "ginger"]</strong></td>
<td><p><strong>dog -&gt; 2 times</strong></p>
<p><strong>bye -&gt; 1 times</strong></p>
<p><strong>city -&gt; 1 times</strong></p>
<p><strong>dad -&gt; 1 times</strong></p>
<p><strong>boys -&gt; 1 times</strong></p>
<p><strong>ginger -&gt; 1 times</strong></p></td>
</tr>
</tbody>
</table>

## **7. Words Tracker**

Write a function that receives an **array of words** and finds
**occurrences of given words** in that sentence.

The input will come as an **array of strings**. The **first string**
will contain the **words** you will be looking for separated by a
**space**. All **strings after that** will be the words in which you
will check for a match.

Print for **each word** how many times it **occurs**. The words should
be **sorted by count in descending**.

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>[</strong></p>
<p><strong>'this sentence',</strong></p>
<p><strong>'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'</strong></p>
<p><strong>]</strong></p></td>
<td><strong>this - 3<br />
sentence - 2</strong></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'is the',</p>
<p>'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']</p></td>
<td><p><strong>the – 3</strong></p>
<p><strong>is - 1</strong></p></td>
</tr>
</tbody>
</table>

## **8. Odd Occurrences**

Write a function that extracts the elements of a sentence, if it appears
an odd number of times (**case-insensitive**).

The input comes as a **single string**. The words will be **separated by
a single space**.

### Example

| **Input**                                       | **Output**      |
| ----------------------------------------------- | --------------- |
| **'Java C\# Php PHP Java PhP 3 C\# 3 1 5 C\#'** | **c\# php 1 5** |
| **'Cake IS SWEET is Soft CAKE sweet Food'**     | **soft food**   |

## **9. Piccolo**

Write a function that:

  - Records a **car number** for every car that enters the **parking
    lot**

  - Removes a **car number** when the car goes out

  - Input will be an array of strings in format **\[direction,
    carNumber\]**

Print the output with all car numbers which are in the parking lot
**sorted in ascending by number.**

**If the parking lot is empty, print: "Parking Lot is Empty"**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['IN, CA2844AA',</strong></p>
<p><strong>'IN, CA1234TA',</strong></p>
<p><strong>'OUT, CA2844AA',</strong></p>
<p><strong>'IN, CA9999TT',</strong></p>
<p><strong>'IN, CA2866HI',</strong></p>
<p><strong>'OUT, CA1234TA',</strong></p>
<p><strong>'IN, CA2844AA',</strong></p>
<p><strong>'OUT, CA2866HI',</strong></p>
<p><strong>'IN, CA9876HH',</strong></p>
<p><strong>'IN, CA2822UU']</strong></p></td>
<td><p><strong>CA2822UU</strong></p>
<p><strong>CA2844AA</strong></p>
<p><strong>CA9876HH</strong></p>
<p><strong>CA9999TT</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>['IN, CA2844AA',</strong></p>
<p><strong>'IN, CA1234TA',</strong></p>
<p><strong>'OUT, CA2844AA',</strong></p>
<p><strong>'OUT, CA1234TA']</strong></p></td>
<td><strong>Parking Lot is Empty</strong></td>
</tr>
</tbody>
</table>

## **10. Party Time**

There is a party at SoftUni. Many guests are invited and they are **two
types**: VIP and regular. When guests come to the party check if he/she
**contains in** any of the **two reservation lists**.

The input will come as an **array of strings**. You will be given the
list with the guests before you receive a command **"PARTY"**.

All **VIP numbers start with a digit.**

When you receive the command **"PARTY",** the guests start coming.

Print the **count** of **guests** then all guests, who didn't come to
the party (VIP must be printed first).

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['7IK9Yo0h',</strong></p>
<p><strong>'9NoBUajQ',</strong></p>
<p><strong>'Ce8vwPmE',</strong></p>
<p><strong>'SVQXQCbc',</strong></p>
<p><strong>'tSzE5t0p',</strong></p>
<p><strong>'PARTY',</strong></p>
<p><strong>'9NoBUajQ',</strong></p>
<p><strong>'Ce8vwPmE',</strong></p>
<p><strong>'SVQXQCbc'</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>2</strong></p>
<p><strong>7IK9Yo0h</strong></p>
<p><strong>tSzE5t0p</strong></p></td>
<td><p><strong>['m8rfQBvl',</strong></p>
<p><strong>'fc1oZCE0',</strong></p>
<p><strong>'UgffRkOn',</strong></p>
<p><strong>'7ugX7bm0',</strong></p>
<p><strong>'9CQBGUeJ',</strong></p>
<p><strong>'2FQZT3uC',</strong></p>
<p><strong>'dziNz78I',</strong></p>
<p><strong>'mdSGyQCJ',</strong></p>
<p><strong>'LjcVpmDL',</strong></p>
<p><strong>'fPXNHpm1',</strong></p>
<p><strong>'HTTbwRmM',</strong></p>
<p><strong>'B5yTkMQi',</strong></p>
<p><strong>'8N0FThqG',</strong></p>
<p><strong>'xys2FYzn',</strong></p>
<p><strong>'MDzcM9ZK',</strong></p>
<p><strong>'PARTY',</strong></p>
<p><strong>'2FQZT3uC',</strong></p>
<p><strong>'dziNz78I',</strong></p>
<p><strong>'mdSGyQCJ',</strong></p>
<p><strong>'LjcVpmDL',</strong></p>
<p><strong>'fPXNHpm1',</strong></p>
<p><strong>'HTTbwRmM',</strong></p>
<p><strong>'B5yTkMQi',</strong></p>
<p><strong>'8N0FThqG',</strong></p>
<p><strong>'m8rfQBvl',</strong></p>
<p><strong>'fc1oZCE0',</strong></p>
<p><strong>'UgffRkOn',</strong></p>
<p><strong>'7ugX7bm0',</strong></p>
<p><strong>'9CQBGUeJ'</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>2</strong></p>
<p><strong>xys2FYzn</strong></p>
<p><strong>MDzcM9ZK</strong></p></td>
</tr>
</tbody>
</table>

## **11. Card Game**

You are given a sequence of people and for every person what cards he
draws from the deck. The input will be an **array of strings**. Each
string will be in the format:

**{personName}: {PT, PT, PT,… PT}**

Where **P** (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the
card and **T** (S, H, D, C) is the type. The name can contain any ASCII
symbol except **':'**. The input will always be valid and in the format
described, there is no need to check it.

A single person **<span class="underline">cannot have more than
one</span>** card with the same power and type, if he draws such a card
he discards it. The people are playing with **multiple decks**. Each
card has a value that is calculated by the power multiplied by the type.
Powers **2 to 10** have the same value and **J to A** are **11 to 14**.
Types are mapped to multipliers the following way (**S -\> 4, H-\> 3, D
-\> 2, C -\> 1**).

Finally print out the total value each player has in his hand in the
format:

**{personName}: {value}**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'Peter: 2C, 4H, 9H, AS, QS',</p>
<p>'Tomas: 3H, 10S, JC, KD, 5S, 10S',</p>
<p>'Andrea: QH, QC, QS, QD',</p>
<p>'Tomas: 6H, 7S, KC, KD, 5S, 10C',</p>
<p>'Andrea: QH, QC, JS, JD, JC',</p>
<p>'Peter: JD, JD, JD, JD, JD, JD'</p>
<p>]</p></td>
<td><p>Peter: 167</p>
<p>Tomas: 175</p>
<p>Andrea: 197</p></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'John: 2C, 4H, 9H, AS, QS',</p>
<p>'Slav: 3H, 10S, JC, KD, 5S, 10S',</p>
<p>'Alex: 6H, 7S, KC, KD, 5S, 10C',</p>
<p>'Thomas: QH, QC, JS, JD, JC',</p>
<p>'Slav: 6H, 7S, KC, KD, 5S, 10C',</p>
<p>'Thomas: QH, QC, JS, JD, JC',</p>
<p>'Alex: 6H, 7S, KC, KD, 5S, 10C',</p>
<p>'Thomas: QH, QC, JS, JD, JC',</p>
<p>'John: JD, JD, JD, JD'</p>
<p>]</p></td>
<td><p>John: 167</p>
<p>Slav: 175</p>
<p>Alex: 115</p>
<p>Thomas: 125</p></td>
</tr>
</tbody>
</table>

## **12. Company Users**

Write a function, which keeps the information about companies and their
employees.

You will receive an **array of strings** containing the **company**
**name** and **employee's id.** Add each employee to the given company.
Keep in mind that a company **cannot have two employees with the same
id**.

When you finish reading data, **order the companies by their name in
ascending order**.

Print the company name and each employee's id in the following format:

**{companyName}**

**-- {id1}**

**-- {id2}**

**-- {idN}**

**Input / Constraints**

  - The input come **as array of strings**, each in the format:
    "**{companyName} -\> {employeeId}**".

  - The input always will be valid.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>[</strong></p>
<p><strong>'SoftUni -&gt; AA12345',</strong></p>
<p><strong>'SoftUni -&gt; BB12345',</strong></p>
<p><strong>'Microsoft -&gt; CC12345',</strong></p>
<p><strong>'HP -&gt; BB12345'</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>HP</strong></p>
<p><strong>-- BB12345</strong></p>
<p><strong>Microsoft</strong></p>
<p><strong>-- CC12345</strong></p>
<p><strong>SoftUni</strong></p>
<p><strong>-- AA12345</strong></p>
<p><strong>-- BB12345</strong></p></td>
<td></td>
<td><p><strong>[</strong></p>
<p><strong>'SoftUni -&gt; AA12345',</strong></p>
<p><strong>'SoftUni -&gt; CC12344',</strong></p>
<p><strong>'Lenovo -&gt; XX23456',</strong></p>
<p><strong>'SoftUni -&gt; AA12345',</strong></p>
<p><strong>'Movement -&gt; DD11111'</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>Lenovo</strong></p>
<p><strong>-- XX23456</strong></p>
<p><strong>Movement</strong></p>
<p><strong>-- DD11111</strong></p>
<p><strong>SoftUni</strong></p>
<p><strong>-- AA12345</strong></p>
<p><strong>-- CC12344</strong></p></td>
</tr>
</tbody>
</table>

## **13. A Miner Task**

You are given an **array of strings**. Every **odd string** is
representing a **resource** (e.g. Gold, Silver, Copper, and so on), and
**every even** – **quantity**. Your task is to collect the resources and
print them each on a new line.

**Print the resources and their quantities in the format:**

**{resource} –\> {quantity}**

The quantities inputs will be in the range \[1 … 2 000 000 000\].

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'Gold',</p>
<p>'155',</p>
<p>'Silver',</p>
<p>'10',</p>
<p>'Copper',</p>
<p>'17'</p>
<p>]</p></td>
<td><p>Gold -&gt; 155</p>
<p>Silver -&gt; 10</p>
<p>Copper -&gt; 17</p></td>
<td></td>
<td><p>[</p>
<p>'gold',</p>
<p>'155',</p>
<p>'silver',</p>
<p>'10',</p>
<p>'copper',</p>
<p>'17',</p>
<p>'gold',</p>
<p>'15'</p>
<p>]</p></td>
<td><p>gold -&gt; 170</p>
<p>silver -&gt; 10</p>
<p>copper -&gt; 17</p></td>
</tr>
</tbody>
</table>

## **14. \*Travel Time**

Write a function that **collects** and **orders** information about
travel destinations.

As **input,** you will receive an **array of strings**.

Each string will consist of the following information with the format:

> "Country name \> Town name \> Travel cost"

The Country name will be a string, the Town name will be a unique
string, Travel cost will be a number.

If you receive the same Town name twice, you should keep the cheapest
offer. Have in mind that one Country may have several Towns to visit.

After you finish the organizational part, you need to let Steven know
which destination point to visit first. The order will be as follows:
First sort Country names **alphabetically** and then sort by **lowest**
Travel cost.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>"Bulgaria &gt; Sofia &gt; 500",</p>
<p>"Bulgaria &gt; Sopot &gt; 800",</p>
<p>"France &gt; Paris &gt; 2000",</p>
<p>"Albania &gt; Tirana &gt; 1000",</p>
<p>"Bulgaria &gt; Sofia &gt; 200"</p>
<p>]</p></td>
<td><p>Albania -&gt; Tirana -&gt; 1000</p>
<p>Bulgaria -&gt; Sofia -&gt; 200 Sopot -&gt; 800</p>
<p>France -&gt; Paris -&gt; 2000</p></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'Bulgaria &gt; Sofia &gt; 25000',</p>
<p>'Bulgaria &gt; Sofia &gt; 25000',</p>
<p>'Kalimdor &gt; Orgrimar &gt; 25000',</p>
<p>'Albania &gt; Tirana &gt; 25000',</p>
<p>'Bulgaria &gt; Varna &gt; 25010',</p>
<p>'Bulgaria &gt; Lukovit &gt; 10'</p>
<p>]</p></td>
<td><p>Albania -&gt; Tirana -&gt; 25000</p>
<p>Bulgaria -&gt; Lukovit -&gt; 10 Sofia -&gt; 25000 Varna -&gt; 25010</p>
<p>Kalimdor -&gt; Orgrimar -&gt; 25000</p></td>
</tr>
</tbody>
</table>

## **15. \*Arena Tier**

Pesho is a pro gladiator, he is struggling to become master of the
Arena.

You will receive **several input lines** in one of the following
formats:

"{gladiator} -\> {technique} -\> {skill}"

"{gladiator} vs {gladiator}"

The **gladiator and technique** are strings, the given **skill** will be
an integer number. You need to keep track of **every gladiator**.

When you receive a **gladiator and his technique and skill**, add him to
the gladiator pool, if he isn't present, else add his technique or
update his skill, only if the current technical skill is lower than the
new value.

If you receive **"{gladiator} vs {gladiator}"** and both gladiators
exist in the tier, they duel with the following rules:

Compare their techniques, if they got at least one in common, the
gladiator with better total skill points wins and the other is demoted
from the tier -\> remove him.

If they don't have techniques in common, the duel isn't happening and
both continue in the Season.

You should end your program when you receive the command **"Ave
Cesar"**. At that point, you should print the gladiators, **ordered by
total skill in descending order, then ordered by name in ascending
order**. Foreach gladiator prints their technique and skill **ordered
descending, then ordered by technique name in ascending order.**

### Input / Constraints

You will receive an **array of strings** as a parameter to your
solution.

  - The input comes in the form of commands in one of the formats
    specified above.

  - Gladiator and technique **will always be one-word string, containing
    no whitespaces**.

  - Skill will be an **integer** in the **range \[0, 1000\]**.

  - There will be **no invalid** input lines.

  - The program ends when you receive the command **"Ave Cesar"**.

### Output

  - The output format for each gladiator is:

> "{gladiator}: {totalSkill} skill"

"- {technique} **\<\!\> {skill}"**

***Scroll down to see examples.***

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>[</strong></p>
<p><strong>'Peter -&gt; BattleCry -&gt; 400',</strong></p>
<p><strong>'Alex -&gt; PowerPunch -&gt; 300',</strong></p>
<p><strong>'Stefan -&gt; Duck -&gt; 200',</strong></p>
<p><strong>'Stefan -&gt; Tiger -&gt; 250',</strong></p>
<p><strong>'Ave Cesar'</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>Stefan: 450 skill</strong></p>
<p><strong>- Tiger &lt;!&gt; 250</strong></p>
<p><strong>- Duck &lt;!&gt; 200</strong></p>
<p><strong>Peter: 400 skill</strong></p>
<p><strong>- BattleCry &lt;!&gt; 400</strong></p>
<p><strong>Alex: 300 skill</strong></p>
<p><strong>- PowerPunch &lt;!&gt; 300</strong></p></td>
<td><strong>We order the gladiators by total skill points descending, then by name. We print every technique along its skill ordered descending by skill, then by technique name.</strong></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>[</strong></p>
<p><strong>'Peter -&gt; Duck -&gt; 400',</strong></p>
<p><strong>'Julius -&gt; Shield -&gt; 150',</strong></p>
<p><strong>'Gladius -&gt; Heal -&gt; 200',</strong></p>
<p><strong>'Gladius -&gt; Support -&gt; 250',</strong></p>
<p><strong>'Gladius -&gt; Shield -&gt; 250',</strong></p>
<p><strong>'Peter vs Gladius',</strong></p>
<p><strong>'Gladius vs Julius',</strong></p>
<p><strong>'Gladius vs Maximilian',</strong></p>
<p><strong>'Ave Cesar'</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>Gladius: 700 skill</strong></p>
<p><strong>- Shield &lt;!&gt; 250</strong></p>
<p><strong>- Support &lt;!&gt; 250</strong></p>
<p><strong>- Heal &lt;!&gt; 200</strong></p>
<p><strong>Peter: 400 skill</strong></p>
<p><strong>- Duck &lt;!&gt; 400</strong></p></td>
<td><p><strong>Gladius and Peter don't have a common technique, so the duel isn't valid.</strong></p>
<p><strong>Gladius wins vs Julius /common technique: "Shield". Julius is demoted.</strong></p>
<p><strong>Maximilian doesn't exist so the duel isn't valid.</strong></p>
<p><strong>We print every gladiator left in the tier.</strong></p></td>
</tr>
</tbody>
</table>

## **16. \*Legendary Farming**

You’ve beaten all the content and the last thing left to accomplish is
to own a legendary item. However, it’s a tedious process and requires
quite a bit of farming. Anyway, you are not too pretentious – any
legendary will do. The possible items are:

  - **"Shadowmourne"** – requires **250 Shards**

  - **"Valanyr"** – requires **250 Fragments**

  - **"Dragonwrath"** – requires **250 Motes**

**"Shards", "Fragments",** and **"Motes"** are the **key materials**,
all else is **junk.**

You will be given lines of input in the format:

> **"{quantity1} {material1} {quantity2} {material2} … {quantityN}
> {materialN}"**

Keep track of the **key materials -** the **first** that reaches the
**250 mark** **wins** the **race**. At that point, print the
corresponding legendary obtained.

Then, print the **remaining** shards, fragments, motes, ordered by
**quantity** in **descending** order, then by **name** in **ascending**
order, each on a new line. Finally, print the collected **junk** items,
in **alphabetical** order.

### Input

  - > Each line comes in the following format:

> **{quantity1} {material1} {quantity2} {material2} … {quantityN}
> {materialN}**

### Output

  - On the **first line**, print the obtained item in format:
    "**{Legendary item} obtained\!**"

  - On the next **three lines**, print the remaining key materials in
    descending order by quantity
    
      - If two key materials have the same quantity, print them in
        alphabetical order

  - On the final **several lines**, print the junk items in alphabetical
    order
    
      - All materials are printed in format **"{material}: {quantity}"**
    
      - All output should be **lowercase**, except the first letter of
        the legendary

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>'3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'</td>
<td><p>Valanyr obtained!</p>
<p>fragments: 5</p>
<p>shards: 5</p>
<p>motes: 3</p>
<p>leathers: 6</p>
<p>stones: 5</p></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>'123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'</td>
<td><p>Dragonwrath obtained!</p>
<p>shards: 22</p>
<p>motes: 19</p>
<p>fragments: 0</p>
<p>fangs: 9</p>
<p>silver: 123</p></td>
</tr>
</tbody>
</table>
