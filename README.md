# CF2-Final-Project

# Task Organizer

A task management tool that lets users input tasks with a priority level and automatically sorts them so the most important ones appear first.

## Project Overview

This project focuses on implementing a sorting algorithm in JavaScript to organize tasks by priority. The main goal is to understand how sorting works at a structural level AND how elements are compared, how they move within an array, and how data stays bundled together during that process.

## Technologies Used

- **HTML** — page structure and input elements (GENERAL LAYOUT USED FROM ANOTHER PROJECT)
- **CSS** — layout and visual styling (STYLEING USED FROM A DIFFERENT PROJECT) 
- **JavaScript** — focusing on class materials first, if i have time, i will maybe work on local storage so that it always saves!

## Features

- Add tasks with a name and a priority level (High, Medium, Low)
- Display tasks in a list
- Sort tasks by priority with a single button
- Status feedback for user actions

## File Structure

task-organizer/
- index.html
- style.css
- script.js

## How to Run

ACCESS IT [HERE](https://davgriddle.github.io/CF2-Final-Project/)
> [!NOTE]
> If for some reason this link isnt working, pleasee clone this project and use a live server on index.html to view it!!.


## How It Works

Tasks are stored as objects in a JavaScript array. Each task object holds the task name, its priority value, and a timestamp. A bubble sort algorithm compares tasks by priority and swaps them when they are out of order. The sort repeats until no swaps are needed, meaning the list is fully ordered.


## Known Challenges

Making the project.