/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
  "use strict";

// suite for RSS feeds definitions
    describe('RSS Feeds', function() {

// test to make sure allFeeds variable is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


// test to make sure allFeeds object has `url` is defined and not empty
        it('allFeeds has URL and not empty', function() {
          for(let feed of allFeeds){
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          }
        });

// test to make sure allFeeds object has `name` is defined and not empty
         it('allFeeds has name and not empty', function() {
           for(let feed of allFeeds){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           }
         });
    });


// suite for testing the menuIcon element
      describe('The menu', function() {

// test for ensuring that menu is hidden by default
         it('the menu is hidden by default', function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });

// test for checking the visibility of the menu when it is clicked
        it('the menu changes visibility when it is clicked', function() {
               const menu = document.querySelector('.menu-icon-link');
               menu.click();
               expect(document.body.classList.contains('menu-hidden')).toBe(false);
               menu.click();
               expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
      });

// suite for testing the feeds content
    describe('Initial Entries', function() {

// starting with loading the feeds and wait untel it is done
           beforeEach(done =>{
               loadFeed(0,done);
           });

// test for checking the availability of at least one entry when loading is done
           it('there is at least one entry element when loadFeed is done', function() {
                  expect($('.feed .entry').length).toBeGreaterThan(0);

           });

    });

// suite for ensuring the content is loading new feeds
    describe('New Feed Selection', function() {

          let firstFeed, secondFeed;
// load more than one feed and compare them
          beforeEach(done => {
            // nested function
                 loadFeed(0,function(){
                   firstFeed = document.querySelector('.feed').innerHTML;
                   loadFeed(1,function(){
                     secondFeed = document.querySelector('.feed').innerHTML;
                     done();
                   });
              });
          });

// test to make sure content is loading and feeds are changing
           it('ensure that content is changing when loadFeed is loaded', function() {
             expect(firstFeed === secondFeed).toBe(false);
           });
      });

}());
