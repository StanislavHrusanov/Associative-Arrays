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

