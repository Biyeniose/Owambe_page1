# Instructions to run the app

Make sure Docker is running

Clone the repo and enter into directory:

```sh
git clone repo_url
cd Owambe_page1
```

Build the app image:

```sh
docker build -t owambe_app1 .
```

Run the app image in a container:

```sh
docker run -p 19000:19000 -p 19001:19001 -p 19002:19002 -it owambe_app1
```
