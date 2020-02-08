# Change Request - Requirements Changes

There is an immediate need for **visibility into customer interactions** on our online portal.

Specifically _interactions with the Product Detail page_ should be collected for futher analysis and interpretation by our Data Science team.

Project Greenfield should **incorporate click tracking on the Product Detail** page within the scope of the initial release.

The click tracking will not be through any 3rd party analytics platform.

All will be done in-house.

To track interactions, each click on the web page should be recorded, as well as metadata associated with that click.

- [ ] Each click on the web page should be recorded
- [ ] Each click's metadata should be associated with the click
- [ ] Each element of the page which was clicked
- [ ] The time of each click
- [ ] The module of each click (which file)

- [ ] Page View
- [ ] Modal View
- [ ] Timing
- [ ] Event
- [ ] Exception
- [ ] Plugin

---

# Cookies

Cookies are some form of storage within browser

They are used to store some form of IDs:

- user IDs
- session IDs
- session parameters

Split into two categories:

1. First Party Cookies

- Cookies set own domain
- Easily create, retrieve, and edit their content when user first visits own website
- Cookies.Samesite -> provides layer of protection against cross-site forgery
- Only the request for data originating from the first party domain
- Only request data originating from first party domain would result on the cookies being provided

2. Third Party cookies

- Cookies set on external domains
- Browser usually sets restrictions on accessing cookies on external domains
- Able to check the information created within a session on these websites
- Usually placed in order to do syncing amd matching and stitching of identite across website
- Usualy the domain Data Management Platgrom (DMP) and Customer Data Platform (CDP)

## Tracking Pixels & Tracking Scripts

- tracking pixels are pieces of code
- usually using an image to serve a bridget between websites
- usually setup as 1x1 pixel gifs to save on bandwidth
- tracking scripts - pieces of S code that usually implement tracking pixels on website
- responsible for creating different requests to external domains

- The tracking script is able to access and create requests using data available on page
- Script also sets different cookies that can be used as identifier
- Data passing through consists of data available 
  - within HTML
  + a url
  + a datalayer
  + cookies / obtained through an vent listener
  + call an API
- Tracking script is able to make 

---

`useEffect` allows us to execute the logic in mounting, updating, and unmounting phases.

```js
useEffect(() => {});
```

Then register a window listener

```js
useEffect(() => {
  window.addEventListener("click", props.onEvent);
});
```

We need to clean up our window listener since hooks are always going to be re-run if you don't specify the dependencies.

So to clean it up we need to return a cleanup function to unregister our function.

```js
useEffect(() => {
  window.addEventListener("click", props.onEvent);
  return () => window.removeEventListener("click");
});
```
