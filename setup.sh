clear
echo Photo Gallery Setup
echo "(c) Ryan Warner 2020"
echo 
echo 'Please provide the root path of your photo gallery without a trailing slash:'
read galleryPath


echo
echo 'Please confirm the following entries:'
echo 
echo Gallery Path: "$galleryPath/"
echo High Quality Gallery Path: "$galleryPath/HQ/"
echo Standard Quality Gallery Path: "$galleryPath/SQ/"
echo Thumbnail Path: "$galleryPath/T/"
echo
echo 'Type "yes" to confirm'
read confirmation

if [ $confirmation = "yes" ]; then
  echo
  echo 'To continue, we will need to remove the existing directory.json'
  echo 'Please make a backup of this file if desired before entering "begin" to initiate the command'
  read secondaryConfirmation
  if [ $secondaryConfirmation = "begin" ]; then
    echo
    echo 'Deleting existing directory.json'
    rm directory.json
    echo 'Building JSON'
    echo
  else
    echo
    echo 'Process exited. Run again in order to rebuild directory.json'
    exit
    fi
else
  echo
  echo 'Please re-run configurator with correct path information'
  exit
fi

tree "$galleryPath" -J -L 3 > directory.json
tree "$galleryPath" -J -L 3
# need to figure out how to store the variable with escaped characters


# dirs=($(find "$galleryPath/" -maxdepth 1 -type d -print0 | xargs -0)) 
# files=($(find "${dirs[*]}/" -maxdepth 1 -type f -print0 | xargs -0))

# echo ${dirs[1]}
# echo ${dirs[2]}
# echo ${dirs[3]}
# echo ${dirs[4]}
# echo ${dirs[5]}

# echo ${files[1]}
# echo ${files[2]}
# echo ${files[3]}
# echo ${files[4]}
# echo ${files[5]}

# jo -p root="$galleryPath" directory=$(jo highQualityPath=${dirs[1]} folderName=$(jo photos=$(jo -a ${dirs[*]})) standardQualityPath=${dirs[2]} folderName=$(jo photos=$(jo 1=name1 2=name2))) 
# use to save output once fixed :) --> append the following to the command I want to save: > directory.json

# this command will generate our desired structure
# jo -p root=/home/ryan/Photo\ Gallery directory=$(jo type=HQ folder=$(jo name=Maine images=$(jo -a image1 image2)))