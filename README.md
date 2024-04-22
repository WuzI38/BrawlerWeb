# Brawler

Brawler is a web application inspired by the EDHREC service. It's built using React and Tailwind CSS. The main goal of the application is to assist in deck building for the Brawl format in the Magic: The Gathering card game.

## Data Source

The application presents data stored in a MySQL database, which is accessed via an API created as part of the BrawlerScrapper project. The data originates from the Aetherhub and MTGDecks services.

## Features

Brawler offers the following functionalities:

- **Display of the most popular commanders**: This feature allows users to see which commanders are currently the most popular in the Brawl format.
- **Display of commanders with the highest win rate**: This feature shows the commanders with the highest ratio of wins to losses.
- **Display of the most frequently used cards in the format**: This feature provides information about the cards that are most commonly used in Brawl decks.
- **Display of the most frequently used cards for a given commander**: For a given commander, the application can display the cards most frequently used in their decks, divided by card types. This feature is available if at least one deck using the given commander has been found on one of the source services.

## Preview

![alt text](public/image.png)