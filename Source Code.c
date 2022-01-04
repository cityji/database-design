/* 
sample Output for file : 
    that shuld be appended at at last of .html file..


        <div class="box">

            <div class="hero">User Name</div>
            <p class="para">Address</p>
        </div>

*/


/*

1. create a structure 
2. input data from user using console.. i/o
3. save inside array of structure..
4. Write that data into index.html as supposed format

*/

#include <stdio.h>
struct student
{
    int  rNo;
    char Fname[10];
    char Lname[10];
    int marks[5];
};

int main(){
    int max=0;
    printf("Input the Number of students you Wish to Add : ");
    scanf("%d",&max); //deciding The Number of array to be wrriten using program
    
    struct student s[max];

    for(int i=0; i<max; i++){
        printf("\nInput Mobile Number\t:\t");
        scanf("%d",&s[i].rNo);
    fflush(stdin);

    printf("Input Name of Student : ");
    scanf("%s %s",s[i].Fname,s[i].Lname);
    

    }

    // for(int i=0; i<max; i++){
    //     printf("\nMobile Number\t:%d",s[i].rNo);
    //     printf("\nStuednt Name\t\t:%s %s\n",s[i].Fname,s[i].Lname);
        
    // }

/* Saving Data Into File*/

FILE *db;
db= fopen("index.html","a");
    for(int i=0; i<max; i++){
        fprintf(db,"\n\n<div class=\"box\">\n\n");
            fprintf(db,"\t<div class=\"hero\">%s %s </div>\n",s[i].Fname,s[i].Lname);
            fprintf(db,"\t<p class=\"para\"> Mobile number : %d</p>\n\n",s[i].rNo);
        fprintf(db,"</div>");
    }

fclose(db);
    return 0;
}