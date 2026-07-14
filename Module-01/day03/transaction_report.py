totals = {}

try:
    with open("transaction.txt") as file:

        for line in file:
            name, amount = line.strip().split(",")
            amount = int(amount)
            totals[name] = totals.get(name, 0) + amount
    sorted_totals = sorted(
        totals.items(),
        key=lambda item: item[1],
        reverse=True
    )
    print("Transaction Report")
    for customer, total in sorted_totals:
        print(f"{customer}: {total}")
    with open("report.txt", "w") as report:

        report.write("Transaction Report\n")
        for customer, total in sorted_totals:
            report.write(f"{customer}: {total}\n")

except FileNotFoundError:
    print("transactions.txt not found.")