 ```
 : git rebase star-rating
First, rewinding head to replay your work on top of it...
Applying: Changing file structure and pushing StarRating
Using index info to reconstruct a base tree...
M src/components/overview/ImageGallery.jsx
M src/components/overview/Overview.jsx
M src/components/overview/ProductInfo.jsx
A src/components/overview/ProductInformation.jsx
A src/components/overview/StarRating.jsx
Falling back to patching base and 3-way merge...
CONFLICT (modify/delete): src/components/overview/StarRating.jsx deleted in HEAD and modified in Changing file structure and pushing StarRating. Version Changing file structure and pushing StarRating of src/components/overview/StarRating.jsx left in tree.
CONFLICT (modify/delete): src/components/overview/ProductInformation.jsx deleted in HEAD and modified in Changing file structure and pushing StarRating. Version Changing file structure and pushing StarRating of src/components/overview/ProductInformation.jsx left in tree.
Auto-merging src/components/overview/ProductInfo.jsx
CONFLICT (content): Merge conflict in src/components/overview/ProductInfo.jsx
Auto-merging src/components/overview/Overview.jsx
CONFLICT (content): Merge conflict in src/components/overview/Overview.jsx
Auto-merging src/components/overview/ImageGallery.jsx
CONFLICT (content): Merge conflict in src/components/overview/ImageGallery.jsx
error: Failed to merge in the changes.
Patch failed at 0001 Changing file structure and pushing StarRating
hint: Use 'git am --show-current-patch' to see the failed patch
Resolve all conflicts manually, mark them as resolved with
"git add/rm <conflicted_files>", then run "git rebase --continue".
You can instead skip this commit: run "git rebase --skip".
To abort and get back to the state before "git rebase", run "git rebase --abort".
```
