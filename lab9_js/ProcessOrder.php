<?php
$product = $_POST["product"];
$material = $_POST["material"];
$quantity = $_POST["quantity"];
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Замовлення прийнято</title>
</head>
<body>
    <h2>Ваше замовлення прийнято</h2>
    
    <?php if (isset($product, $material, $quantity)): ?>
        <p>Замовлено виріб - **<?php echo htmlspecialchars($product); ?>**</p>
        <p>Матеріал - **<?php echo htmlspecialchars($material); ?>**</p>
        <p>Кількість - **<?php echo htmlspecialchars($quantity); ?>**</p>
    <?php else: ?>
        <p style="color: red;">Помилка: Дані замовлення не були отримані коректно.</p>
    <?php endif; ?>
    
    <p><a href="OrderForm.html">← Повернутися до форми замовлення</a></p>
</body>
</html>