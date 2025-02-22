import matplotlib.pyplot as plt

# Phase names
phases = ["Research & Development", "Frontend Development", "Database Setup & Model Making", "Backend", "Testing" , "Improvements"]
# Progress percentage
progress = [100, 100, 100, 0, 0, 0]

plt.figure(figsize=(8,5))
plt.barh(phases, progress, color=['green', 'orange', 'red', 'gray','blue','voilet','yellow'])
plt.xlabel("Completion Percentage")
plt.title("Software Project Progress Analysis")
plt.xlim(0, 100)

# Adding percentage labels
for index, value in enumerate(progress):
    plt.text(value + 2, index, f"{value}%", va='center', fontsize=10)

plt.gca().invert_yaxis()  # To display the first phase on top
plt.show()
