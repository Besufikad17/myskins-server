# Myskins-server

<p>Backend for mysins written using node, typescript, express and prisma.</p>

## Requirements

- Nodejs <= 14.x and npm <= 8.x
- [Express](https://expressjs.com/) 
- [Prisma](https://www.prisma.io/)

## Installation

- Cloning the repo
  
  ```console
   
     git clone https://github.com/Besufikad17/myskins-server.git

   ```
- Navigating to project directory

    ```console

     cd myskins-server
    ```
- Installing depedencies

    ```console

     npm install
    ```
- Running the server
   
   ```console
    npm run dev
   ```

## Usage

### Endpoints

| Endpoint             | Body/Params                                     | Request type | URL                         |
|----------------------|-------------------------------------------------|--------------|-----------------------------|
| AddSkin              | { weapon, collectionName, edition, price, img } | POST         | /api/add_skins              |
| GetAllSkins          |                                                 | GET          | /api/all                    |
| GetSkinsByWeaponType | Parmas: type <string>                           | GET          | /api/type/:type             |
| GetSkinsByCollection | Parmas: collection  <string>                    | GET          | /api/collection/:collection |
| GetSkinsByEdition    | Parmas: edition  <string>                       | GET          | /api/edition/:edition       |