<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Numbers</title>
	<style>
		*{
			margin: 0px;
			padding: 0px;
		}
		
		}
	</style>
</head>
<body>
	<div class="position1">
		<h1>Інтерфейс суми</h1>
		<button onclick="sumInterface()">Click me</button>
	</div>
	<div>
		<h1>Чому 6.35.toFixed(1) == 6.3?</h1>
		<p class="answer">
			Тому що це не округлення, а "обрізання" числа до певного виду.
			 Для округлення використовують такі функції Math.Round(), Math.Cell(), Math.Floor().
		</p>
	</div>
	<div>
		<h1>Додавання цін</h1>
		<p class="answer">
			<input type="text" id="price1">
			<input type="text" id="price2">
			<button onclick="countPrices()">Count</button>
			<input type="text" id="priceAnswer" readonly>
			Тому що це не округлення, а "обрізання" числа до певного виду.
			 Для округлення використовують такі функції Math.Round(), Math.Cell(), Math.Floor().
		</p>
	</div>
	<div>
		<h1>Безкінечний цикл через помилку</h1>
		<p class="answer">
			Дроби в JS зберігаються в binary float pointing вигляді, це значить що там буде похибка 
			в цифрах 6-8 після коми, через ці похибки ми ніколи не отримаємо рівно 10.
		</p>
	</div>
	<div>
		<h1>GetDecimal()</h1>
		<button onclick="GetDeciamal()">GetDecimal</button>
	</div>
	<div>
		<h1>fibBinet()</h1>
		<button onclick="fibBinet()">fibBinet</button>
	</div>
	<div>
		<h1>Випадкове число від 0 до MAX</h1>
		<button onclick="randZeroMax()">Go!</button>
	</div>
	<div>
		<h1>Випадкове число від MIN до MAX</h1>
		<button onclick="randFloat()">Go!</button>
	</div>
	<div>
		<h1>Випадкове число від MIN до MAX (INTEGER)</h1>
		<button onclick="randInt()">Go!</button>
	</div>
	<script src="js/Numbers.js">
	</script>
</body>